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
    const select = "SELECT * FROM `user`";
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

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    //Cek kalau username atau password ada dikirim oleh user ke server
    if (!username || !password) {
        res.status(400).json({
            message: "Username and Password harus ada"
        })
    }

    try {
        //Taking data based on it username
        const [results] = await connection.promise().query("SELECT * FROM `user` WHERE `username` = ?", [username])

        //If the data is not null
        if (results.length === 0) {
            res.status(404).json({
                message: "Username not found"
            })
            //If there is data
        } else {
            const user = results[0];
            //Comparing hashed password and password in plain text
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
        const insert = "INSERT INTO `user` (username, password) VALUES(?, ?)";
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


//Update User
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
        const updateSql = "UPDATE `user` SET username = ?, password = ? WHERE id = ?";
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

//DELETE
app.delete('/delete/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deleteSql = "DELETE FROM `user` WHERE id = ?"
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