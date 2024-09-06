require('dotenv').config()
const db = require("better-sqlite3")(process.env.DBNAME)

const createTask = (task)=>{
    const query = 'INSERT INTO tasks(task) VALUES(?)'
    const result = db.prepare(query).run(tasks.task)
    if(result.change === 0) {
        throw new Error("An unknown error occured ")
    }
}

module.exports = {createTask}