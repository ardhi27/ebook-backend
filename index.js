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

app.get('/user', (req, res) => {
    const select = "SELECT * FROM `user`";
    connection.query(select, (err, results) => {
        if (err) {
            console.error("Error Taking Data : ", err);
            res.status(500).send("Error Taking Data")
        } else {
            res.json(results);
        }
    })
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            message: "Username and Password harus ada"
        })
    }

    try {
        const [results] = await connection.promise().query("SELECT * FROM `user` WHERE `username` = ?", [username])

        if (results.length === 0) {
            res.status(404).json({
                message: "Username not found"
            })
        }

        const user = results[0];
        const passwordStatus = await bcrypt.compare(password, user.password);
        if (!passwordStatus) {
            res.status(401).json({
                message: "Password Salah"
            })
        }

        res.status(200).json({
            message: "Login Successfuly",
            user: {
                id: user.id,
                username: user.username
            }
        })
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
app.put('/update/:id', (req, res) => {
    const userId = req.params.id
    const { username, password } = req.body;
    const updateSql = "UPDATE `user` SET username = ?, password = ? WHERE id = ?";
    connection.query(updateSql, [username, password, userId], (err, result) => {
        if (err) {
            console.error("Error updating data", err);
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else if (result.affectedRows === 0) {
            res.status(404).json({
                message: 'User Not Found'
            })
        } else {
            res.json({
                message: 'Successfully Updated Data',
                data: {
                    userId: userId,
                    username, password
                }
            })
        }
    })
})

//DELETE
app.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;
    const deleteSql = "DELETE FROM `user` WHERE id = ?"
    connection.query(deleteSql, [userId], (err, result) => {
        if (err) {
            console.error("Error Deleting Data", err);
            res.status(500).json({
                message: 'Error Internal Server'
            })
        } else if (result.affectedRows === 0) {
            res.status(404).json({
                message: 'User Data Not Found'
            })
        } else {
            res.json({
                message: 'User Data Deleted',
                data: {
                    userId: userId,
                }
            })
        }
    })
})

app.listen(port, () => {
    console.log(`This backend running on port :  ${port}`);
})