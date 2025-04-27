import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import dotenv from 'dotenv';

const app = express();
const port = 3000;

dotenv.config();

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
            res.status(201).send("Succesfuly Added Data");
        }
    })
})

app.listen(port, () => {
    console.log(`This backend running on port :  ${port}`);
})