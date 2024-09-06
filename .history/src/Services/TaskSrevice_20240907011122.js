require("dotenv")
const db = require('better-sqlite3')('app.db');

const getTasks = () => {
    try {
        const query = 'SELECT task FROM Tasks';
        const result = db.prepare(query).all();
        return result
    } catch (error) {
        console.error(error);
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
        console.error(error);
    }
};


module.exports = { getTasks, createTask }