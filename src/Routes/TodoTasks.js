const express = require('express');
const router = express.Router()
const {getTasks, createTask} = require('../Services/TaskSrevice');


// read
router.get('/TodoTasks', (req, res) => {
    const tasks = getTasks()
    return res.status(200).json({
        tasks:tasks
    })
});

// create
router.post('/TodoTasks', (req,res) => {
    const body = req.body
    //console.log(body)
    createTask(body)
    return res.status(201).json({
        message: "Task is Created"
    })
});


module.exports = router;