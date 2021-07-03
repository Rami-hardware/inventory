//all reqrie i need
const fs = require("fs")
const mysql = require("mysql2")
const express = require('express')
const path = require('path')
let cors = require('cors')
let bodyParser = require("body-parser");

//using Experss libaray
let app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../BackEnd`')));
port = 5050;

//allow to pass JSON in body
app.use(bodyParser.json());

//mySQL Connection
let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: '',
    database:"invetory"
})

//Chacking mySQL + records display in console
con.connect((err) =>{
    if(err) throw err
    console.log('connected')
})

//show JSON File
let loadJSON = (filename) => {
    return JSON.parse(fs.readFileSync(filename)) ? JSON.parse(fs.readFileSync(filename).toString())  : 'null'
}

//write in JSON file
let saveJSON = (filename , json) =>{
    return fs.writeFileSync(filename,JSON.stringify(json))
}

//save & show all records
 con.query("select * from Persons;", (err, result) => {
    if(err) throw err
    saveJSON("records.json" , result)
})

//passing JSON File to Vue
app.get('/', (req, res) => {
    console.log('api/users called!')
    res.json(loadJSON("records.json"));
  });
//Lanching backend on browser
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});