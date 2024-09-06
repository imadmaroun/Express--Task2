require('dotenv').config()
const db = require("better-sqlite3")(process.env.DBNAME)

const creatTask = (task)=>{
    const query = 'INSERT INTO tasks(task) VALUES(?)'
    const result = db.prepare
}

module.exports = {getTasks}