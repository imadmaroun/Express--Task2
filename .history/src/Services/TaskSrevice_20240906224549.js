require('dotenv').config()
const db = require("better-sqlite3")(process.env.DBNAME)

const creatTask = (task)=>{
    
}

module.exports = {getTasks}