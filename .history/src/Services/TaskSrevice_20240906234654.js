require('dotenv').config(); // Make sure this is the first line
const db = require("better-sqlite3")(process.env.DBNAME);

function getTasks() {
    return {
        task: "Do all the Bootcamp tasks!!"
    }
}



const path = require('path');
console.log(path.resolve(process.env.DBNAME));  // Logs the absolute path to app.db



module.exports = { getTasks, createTask }