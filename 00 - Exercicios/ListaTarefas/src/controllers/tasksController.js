const taskModel = require("../models/tasksModel");

const tasksController = {
  index: (req, res) => {
    res.render("index");
  },

  listAllView: (req, res) => {
    let lists = taskModel.getAllTasks();
    res.render("allTasks", { lista: lists });
  },

  listByIdView: (req, res) => {
    let id = parseInt(req.params.id); 
    let list = taskModel.getListById(id); 
    res.render('list', { lista: list });
  }, 

  addTask: (req, res) => {
    let listId = parseInt(req.params.id); 
    let nameTask = req.body.nameTask; 
    taskModel.addTask(listId, nameTask); 
    res.redirect(`list/${listId}`); 
  }, 

  concludeTask: (req, res) => {
    let listId = parseInt(req.params.listId); 
    let taskId = parseInt(req.params.taskId);
    taskModel.concludeTask(listId, taskId); 
    res.redirect(`/list/${listId}`);  
  }, 
  
  deleteTask: (req, res) => {
    let listId = parseInt(req.params.listId);
    let taskId = parseInt(req.params.taskId);
    taskModel.deleteTask(listId, taskId); 
    res.redirect(`/list/${listId}`);
  }, 

  renderNewList: (req, res) => {
    res.render("newListView");
  },

  saveNewList: (req, res) => {
    let nameList = req.body.nameList;
    let novaLista = taskModel.createList(nameList);
    taskModel.saveList(novaLista);
    res.redirect("/allTasks");
  }

};

module.exports = tasksController;