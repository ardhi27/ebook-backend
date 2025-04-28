import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import dotenv from 'dotenv';

const app = express();
const port = 3000;

dotenv.config();
//express.json digunakan untuk membaca data JSON yang masuk ke dalam server
app.use(express.json())
//Membantu server agar data dapat terbaca di request body
app.use(bodyParser.urlencoded({ extended: true }))


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

//Displaying userlist
app.get('/userlist', (req, res) => {
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

//Add user
app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    const insert = "INSERT INTO `user` (username, password) VALUES(?, ?)";
    connection.query(insert, [username, password], (err, results) => {
        if (err) {
            console.error("Error : ", err);
            res.status(500).send("Error Input Data");
        } else {
            res.status(201).json({
                message: "Successfully Added Data",
                data: {
                    id: results.insertId,
                    username,
                    password
                }
            });

        }
    })
})

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
    const userId = req.params;
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
                    username,
                    password
                }
            })
        }
    })
})

app.listen(port, () => {
    console.log(`This backend running on port :  ${port}`);
})