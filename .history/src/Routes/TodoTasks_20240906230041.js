const express = require('express');
const router = express.Router()
const { getTasks, createTask } = require('../Services/TaskSrevice');


// read
router.get('/TodoTasks', (req, res) => {
    const json = getTasks()
    return res.status(200).json(json)
});

// create
router.post('/TodoTasks', (req, res) => {
    const body = req.body
    console.log(body)
    createTask()
    return res.status(201).json({
        message: "Task is Created"
    })
});

// update
router.put('/TodoTasks', (req, res) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Updated"
    })
});

// delete
router.delete('/TodoTasks', (req, res) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Deleted"
    })
});

module.exports = router;