const express = require('express');
const router = express.Router();
const { getTasks } = require('../Services/TaskService');  // Assuming 'TaskService' is the correct filename

// Read route
router.get('/TodoTasks', (req, res) => {
    const json = getTasks();  // Use the imported getTasks function
    return res.status(200).json(json);  // Send the response with the task
});

module.exports = router;
