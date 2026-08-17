const express = require("express");
const tasksController = require("../controllers/tasksController");
const router = express.Router();

router.get('/', tasksController.index); 
router.get('/allTasks', tasksController.listAllView); 
router.get('/list/:id', tasksController.listByIdView); 
router.post('/list/:id/tasks', tasksController.addTask); 
router.post('/list/:listId/task/:taskId/conclude', tasksController.concludeTask)
router.post('/list/:listId/task/:taskId/delete', tasksController.deleteTask)
router.get('/newListView', tasksController.renderNewList); 
router.post("/newListView", tasksController.saveNewList);

module.exports = router;
