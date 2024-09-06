require('dotenv').config(); // Make sure this is the first line
const db = require("better-sqlite3")(process.env.DBNAME);

function getTasks() {
    return {
        task: "Do all the Bootcamp tasks!!"
    }
}


const createTask = (task) => {
    console.log(process.env.DBNAME);
    const query = 'INSERT INTO Tasks(task) VALUES(?)';
    const result = db.prepare(query).run(Tasks.task);  // Use task.task to extract the correct value
    if (result.changes === 0) {
        throw new Error("An unknown error occurred while creating a new task");
    }
};

const path = require('path');
console.log(path.resolve(process.env.DBNAME));  // Logs the absolute path to app.db



module.exports = { getTasks, createTask }