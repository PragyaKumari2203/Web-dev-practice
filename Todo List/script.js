const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task");

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "✔️";
  doneBtn.title = "Mark as done";
  doneBtn.onclick = () => li.classList.toggle("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.title = "Delete task";
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
}

function clearAll() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    taskList.innerHTML = "";
  }
}
