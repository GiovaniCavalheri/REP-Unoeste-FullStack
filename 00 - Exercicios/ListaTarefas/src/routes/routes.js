const express = require("express");
const router = express.Router(); 
const tasksController = require("../controllers/tasksController"); 
let controllerTasks = new tasksController(); 

router.get("/", controllerTasks.index); 

module.exports = router; 