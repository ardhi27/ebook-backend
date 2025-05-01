import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;

dotenv.config();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

app.get('/user', async (req, res) => {
    const select = "SELECT * FROM `User`";
    try {
        const [results] = await connection.promise().query(select);
        if (results.length === 0) {
            res.status(404).json({
                message: "Data not found"
            })
        } else {
            res.status(200).json({
                message: "Data succesfuly displayed",
                data: results
            })
        }
    } catch (err) {
        console.error("Error : ", err);
        res.status(500).json({
            message: "Internal Error Server"
        })
    }
})

app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    if (isNaN(userId)) {
        res.status(400).json({
            message: "User ID Not Found!"
        })
    }
    const selectUser = "SELECT * FROM `User` WHERE `id` = ?"
    try {
        const [results] = await connection.promise().query(selectUser, [userId]);
        if (results.length === 0) {
            res.status(404).json({
                message: "User data not found!"
            })
        } else {
            const user = results[0];
            res.status(200).json({
                message: "User Found!",
                data: user
            })
        }
    } catch (err) {
        console.error("Error : ", err);
        res.status(500).json({
            message: "Internal Error Server"
        })
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            message: "Username and Password required!"
        })
    }

    try {
        //Taking data based on it username
        const [results] = await connection.promise().query("SELECT * FROM `User` WHERE `username` = ?", [username])

        if (results.length === 0) {
            res.status(404).json({
                message: "Username not found"
            })

        } else {
            const user = results[0];
            const passwordStatus = await bcrypt.compare(password, user.password);
            if (!passwordStatus) {
                res.status(401).json({
                    message: "Incorrect Password"
                })
            } else {
                res.status(200).json({
                    message: "Login Successfuly",
                    user: {
                        id: user.id,
                        username: user.username
                    }
                })
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Error Server"
        })
    }
})


app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);
        const insert = "INSERT INTO `User` (username, password) VALUES(?, ?)";
        connection.query(insert, [username, hashedPassword], (err, results) => {
            if (err) {
                console.error("Error inserting data: ", err);
                return res.status(500).send("Error Input Data");
            } else {
                res.status(201).json({
                    message: "Successfully Added Data",
                    data: {
                        id: results.insertId,
                        username,
                    }
                });
            }
        });
    } catch (err) {
        console.error("Error hashing password", err);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});


app.put('/update/:id', async (req, res) => {
    const userId = req.params.id
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(404).json({
            message: "Username or password required to fill"
        })
    }

    try {
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password Update : ", hashedPassword);
        const updateSql = "UPDATE `User` SET username = ?, password = ? WHERE id = ?";
        const [results] = await connection.promise().query(updateSql, [username, hashedPassword, userId])
        if (results.affectedRows === 0) {
            res.status(404).json({
                message: "Data Not Found"
            })
        } else {
            res.status(200).json({
                message: "Data updated succesfuly",
                data: {
                    userId: userId,
                    username: username
                }
            })
        }
    } catch (err) {
        console.error("Error : ", e);
        res.status(500).json({
            message: "Error Internal Server"
        })
    }
})

app.delete('/delete/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deleteSql = "DELETE FROM `User` WHERE id = ?"
        const [results] = await connection.promise().query(deleteSql, [userId])

        if (results.affectedRows === 0) {
            res.status(404).json({
                message: "Data not found to delete"
            })
        } else {
            res.status(200).json({
                message: "Data deleted succesfuly",
                userId: userId
            })
        }

    } catch (err) {
        console.error("Error : ", err)
        res.status(500).json({
            message: "Internal Error Server"
        })
    }

})

app.listen(port, () => {
    console.log(`This backend running on port :  ${port}`);
})