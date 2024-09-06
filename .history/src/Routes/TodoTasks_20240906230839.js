const express = require('express');
const router = express.Router();
const { getTasks } = require('../Services/TaskService');

router.get('/TodoTasks', (req, res) => {
    const json = getTasks();
    return res.status(200).json(json);
});

module.exports = router;
