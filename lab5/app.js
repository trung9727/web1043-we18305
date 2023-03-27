let tasks = [];

function addTask() {
  const taskNameInput = document.getElementById("taskName");
  const taskDescriptionInput = document.getElementById("taskDescription");

  const taskName = taskNameInput.value.trim();
  const taskDescription = taskDescriptionInput.value.trim();

  if (taskName.length < 5) {
    alert("Task name must be at least 5 characters long");
    return;
  }

  if (taskDescription.length < 20) {
    alert("Task description must be at least 20 characters long");
    return;
  }

  const task = { name: taskName, description: taskDescription };
  tasks.push(task);

  taskNameInput.value = "";
  taskDescriptionInput.value = "";

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const task = tasks[index];
  const newTaskName = prompt("Enter new task name", task.name);
  const newTaskDescription = prompt("Enter new task description", task.description);

  if (newTaskName.length < 5) {
    alert("Task name must be at least 5 characters long");
    return;
  }

  if (newTaskDescription.length < 20) {
    alert("Task description must be at least 20 characters long");
    return;
  }

  task.name = newTaskName;
  task.description = newTaskDescription;

  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    taskItem.innerText = `${task.name} - ${task.description}`;
    deleteButton.innerText = "Delete";
    editButton.innerText = "Edit";

    deleteButton
