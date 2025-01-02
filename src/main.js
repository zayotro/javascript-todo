import "./style.css";
import "./fonts.css";

const tasks = [];

const taskList = document.getElementById("task-list");
const createTaskForm = document.getElementById("createTaskForm");
const noTaskElement = document.getElementById("no-tasks");
const taskItem = document.getElementById("task-item");

function render() {
  if (tasks.length === 0) {
    taskList.innerHTML = noTaskElement.innerHTML;
    return;
  }
}

function onCreateTaskFormSubmit(event) {
  const data = new FormData(event.target);
  const title = data.get("taskName");

  const task = {
    id: "1234",
    title: title,
    date: new Date(),
    complete: false,
  };

  tasks.push(task);
  render();
}

createTaskForm.addEventListener("submit", onCreateTaskFormSubmit);

render();
