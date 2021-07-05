//all reqrie i need
const fs = require("fs")
const oracledb = require("oracledb")
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
async function run(){
  let connection;
try {
  connection =  await oracledb.getConnection({ 
      user: "INV_WEST", 
      password: "ITWEST", 
      connectionString: "10.64.71.100/orcl" 
  });
  console.log("Successfully connected to Oracle Database");
  sql = `SELECT * FROM orpos`;
  result = await connection.execute(sql,
      [],
      {outFormat: oracledb.OBJECT }
      );
  saveJSON("records.json" , result.rows)
}catch(err){
console.error("Error connecting to Oracle " + err)
}
}

run();  

//passing JSON File to Vue
app.get('/', (req, res) => {
    console.log('api/users called!')
    res.json(loadJSON("records.json"));
  });


tcpp.probe('10.64.71.100', 80, function(err, available) {
    console.log(available);
});

tcpp.ping({ address: '10.64.71.100' }, function(err, data) {
    if(err) throw err
    console.log(data);
});

//Lanching backend on browser
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});