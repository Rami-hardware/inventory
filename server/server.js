const express = require('express');
const app = express();
const port = 5050;
const bodyParser = require('body-parser');
const path = require('path');
const oracledb = require('oracledb');
const mysql = require('mysql')
const fs = require('fs');
const { throws } = require('assert');
//to use JSON files
app.use(bodyParser.json());
//must dist your project 
app.use(express.static(path.join(__dirname, '../UI/dist')));

//render page 
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '../UI/build/index.html'))
})
//Oracle DB connction 
async function run(){
    let connection;
try {
    connection =  await oracledb.getConnection({ 
        user: "INV_WEST", 
        password: "ITWEST", 
        connectionString: "10.64.71.100/orcl" 
    });
    console.log("Successfully connected to Oracle Database");
}catch(err){
console.error("Error connecting to Oracle")
}
}

run();

//listen to port 5050
app.listen(port,()=> console.log(`app working in port ${port}`));