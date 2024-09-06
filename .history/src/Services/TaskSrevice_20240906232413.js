require('dotenv').config()
const db = require("better-sqlite3")(process.env.DBNAME)

function getTasks() {
    return {
        task: "Do all the Bootcamp tasks!!"
    }
}


const createTask = (task) => {
    const query = 'INSERT INTO Tasks(task) VALUES(?)'
    const result = db.prepare(query).run(task)
    if (result.change === 0) {
        throw new Error("An unknown error occured while creating a new task")
    }
}

module.exports = { getTasks, createTask }