const db = require('better-sqlite3')('app.db');

const createTask = (task) => {
    try {
        const query = 'INSERT INTO Tasks(task) VALUES(?)';
        const result = db.prepare(query).run(task.task);
        if (result.changes === 0) {
            throw new Error("An unknown error occurred while creating a new task");
        }
    } catch (error) {
        console.error("Transaction failed:", error);
    }
};



const createTask = (task) => {
    try {
        const query = 'INSERT INTO Tasks(task) VALUES(?)';
        const result = db.prepare(query).run(task.task);
        if (result.changes === 0) {
            throw new Error("An unknown error occurred while creating a new task");
        }
    } catch (error) {
        console.error("Transaction failed:", error);
    }
};


module.exports = { getTasks, createTask }