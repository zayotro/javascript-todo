import "./style.css";
import "./fonts.css";

const tasks = [];

const taskList = document.getElementById("task-list");
const createTaskForm = document.getElementById("createTaskForm");
const noTaskElement = document.getElementById("no-tasks");

function onCreateTaskFormSubmit(event) {
  const data = new FormData(event.target);
  const title = data.get("taskName");

  tasks.push({
    id: (Math.random() * 10).toString(),
    title: title,
    date: new Date(),
    complete: false,
  });
}

createTaskForm.addEventListener("submit", onCreateTaskFormSubmit);
