require('dotenv').config()
const db = require("better-sqlite3")(process.env.DBNAME)

const creatTask = (task)=>{
    const query = 'INSERT INTO tasks(task) '
}

module.exports = {getTasks}