import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";

const app = express();
const port = 3000;

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
    connection.query(selectSql, (err, res) => {
        if (err) {
            console.error("Error Taking Data : ", err);
            res.serverStatus(500).send("Error Taking Data")
        } else {
            res.json(results);
        }
    })
})

app.listen(port, () => {
    console.log(`This backend running on port :  ${port}`);
})