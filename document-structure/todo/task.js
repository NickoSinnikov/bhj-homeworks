const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");



tasksAdd.onclick= function(){
   
        if (taskInput.value !==""){
            tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
            <div class="task__title">
              ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`);
        } 
}