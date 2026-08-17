let listTasks = [
  {
    id: "1",
    nameList: "Aprendendo EJS",
    subtasks: [
      {
        taskid: "2",
        nameTask: "Começar a Entender o Back-End",
        progress: false,
      },
    ],
  },

  {
    id: "3",
    nameList: "Aprendendo ASD",
    subtasks: [
      { taskid: "4", nameTask: "Começar a Entender o Dev-Ops", progress: true },
    ],
  },
];

const taskModel = {
  getAllTasks() {
    return listTasks;
  },

  getListById(id) {
    const task = listTasks.find((task) => task.id === id);
    return task;
  },

  createList(nameList) {
    let newList = {
      id: Date.now().toString(),
      nameList: nameList,
      subtasks: [],
    };
    return newList;
  },

  saveList(list) {
    listTasks.push(list);
    return;
  },

  deleteList(listId) {
    listTasks = listTasks.filter((list) => list.id !== listId);
  },

  // ==> Tarefas
  addTask(listId, nameTask) {
    let list = listTasks.find((list) => list.id === listId);
    let subTask = {
      id: Date.now().toString(),
      nameTask: nameTask,
      progress: false,
    };
    list.subtasks.push(subTask);
  },

  concludeTask(listId, taskId) {
    let list = listTasks.find((list) => list.id === listId);
    let task = list.subtasks.find((task) => task.id === taskId);
    if (task.progress == true) {
      console.log("Já está concluída.\n");
    } else {
      task.progress = true;
    }
  },

  deleteTask(listId, taskId) {
    let list = listTasks.find((list) => list.id === listId);
    list.subtasks = list.subtasks.filter((task) => task.id !== taskId);
  },
};

module.exports = taskModel; 
