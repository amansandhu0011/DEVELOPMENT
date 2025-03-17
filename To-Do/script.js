document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form"); 
    const taskList = document.getElementById("taskList");
    const dateFilter = document.getElementById("filterdate");
    const selectDate = document.getElementById("select-date");

    dateFilter.addEventListener("change", () => {
        selectDate.textContent = `Tasks for ${dateFilter.value}` || "Select a Date";
        showTasks();
    });

    taskForm.addEventListener("submit", (e) => { 
        e.preventDefault();
        const formData = new FormData(taskForm);
        const task = Object.fromEntries(formData.entries());
        saveTask(task);
        taskForm.reset();
    });

    function saveTask(task){
        const tasks = [...JSON.parse(localStorage.getItem("tasks")) || [],task];
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showTasks();
    }

    function showTasks(){
        taskList.innerHTML = "";
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const selectedDate = dateFilter.value;
       
        const filterTasks = tasks.filter(task => !selectedDate || task.taskDate === selectedDate);
        if(filterTasks.length>0){
        filterTasks.forEach((task,index) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            taskDiv.innerHTML = `
            <div class="title">${task.taskname}</div>
            <div class="date">${task.taskDate}</div>
            <div class="time">${task.taskTime}</div>
            <div class="delete" data-index="${index}">Delete</div>`;

            taskList.appendChild(taskDiv);
        });
      }
      else{
        const taskDiv = document.createElement("div");
            taskDiv.classList.add("empty-task");
            taskDiv.innerHTML = "No tasks for this day";
            taskList.appendChild(taskDiv);
      }
    }

    taskList.addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete")){
            deleteTask(e.target.dataset.index);
        }
    })

    function deleteTask(index){
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showTasks();
    }
    showTasks();
});
