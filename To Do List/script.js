function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

   
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskItem.appendChild(taskText);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => taskItem.remove();
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add functionality for pressing "Enter" to add a task
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
