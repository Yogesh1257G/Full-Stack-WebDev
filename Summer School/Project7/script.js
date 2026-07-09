const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const taskValue = taskInput.value.trim();

    
    if(taskValue === ""){
        alert("Please enter a valid task!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = taskValue;

    
    taskText.addEventListener("click", () => {
        taskText.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
    });

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    taskInput.value = "";
}