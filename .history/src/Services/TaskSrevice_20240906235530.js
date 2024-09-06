const db = require('better-sqlite3')('app.db');



const createTask = (task) => {
    const query = 'INSERT INTO Tasks(task) VALUES(?)';
    const result = db.prepare(query).run(task.task);  // Use task.task to extract the correct value
    if (result.changes === 0) {
        throw new Error("An unknown error occurred while creating a new task");
    }
};


module.exports = {  createTask }