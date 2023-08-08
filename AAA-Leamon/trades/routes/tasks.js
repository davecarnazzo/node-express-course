const express = require('express')
//const { tasks } = require('../controllers/tasks')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
} = require('../controllers/tasks')

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new tasks
// app.get('/api/v1/tasks/id')      - get sijgle tasks
// app.patch('/api/v1/tasks/:id')   - update tasks
// app.delete('/api/v1/tasks/:id')  - delete tasks

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id/').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router
