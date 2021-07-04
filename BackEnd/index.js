//all reqrie i need
const fs = require("fs")
//const oracledb = require("oracledb")
const express = require('express')
const path = require('path')
let cors = require('cors')
let bodyParser = require("body-parser");
const mysql = require('mysql2')
var tcpp = require('tcp-ping');

//using Experss libaray
let app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../BackEnd`')));
port = 5050;

//allow to pass JSON in body
app.use(bodyParser.json());
//show JSON File
let loadJSON = (filename) => {
    return JSON.parse(fs.readFileSync(filename)) ? JSON.parse(fs.readFileSync(filename).toString())  : 'null'
}

//write in JSON file
let saveJSON = (filename , json) =>{
    return fs.writeFileSync(filename,JSON.stringify(json))
}

//save & show all records & Oracle DB connction 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: `invetory`
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
    if (err) throw err;
    con.query("select   * from persons", function (err, result, fields) {
      if (err) throw err;
      saveJSON('records.json',result);
    });
  });

//passing JSON File to Vue
app.get('/', (req, res) => {
    console.log('api/users called!')
    res.json(loadJSON("records.json"));
  });


tcpp.probe('localhost', 80, function(err, available) {
    console.log(available);
});

tcpp.ping({ address: 'localhost' }, function(err, data) {
    if(err) throw err
    console.log("local host pinged ");
});

//Lanching backend on browser
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});