require('dotenv').config(); // Make sure this is the first line
const db = require("better-sqlite3")('app.db');

function getTasks() {
    return {
        task: "Do all the Bootcamp tasks!!"
    }
}


const createTask = (task) => {
    const query = 'INSERT INTO Tasks(task) VALUES(?)';
    const result = db.prepare(query).run(task.task);  // Use task.task to extract the correct value
    if (result.changes === 0) {
        throw new Error("An unknown error occurred while creating a new task");
    }
};

// Create the table if it doesn't exist
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL
    );
`;
db.prepare(createTableQuery).run();

const checkTable = () => {
    const result = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='Tasks';").get();
    if (!result) {
        console.log('Tasks table does not exist');
    } else {
        console.log('Tasks table exists');
    }
};

checkTable();


module.exports = { getTasks, createTask }