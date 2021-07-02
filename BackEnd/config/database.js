//import db library 
import mysql from 'mysql2'
//create db connection
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: `invetory`
})
// can use all modules in other files
export default db;