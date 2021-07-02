import db from "../config/database.js"

// Get All Products
export const getRecords = function result() {
    db.query("SELECT * FROM Persons", (err, results) => {             
        if(err) throw console.log(err);
        console.log(results)
    });
    db.end();  
}