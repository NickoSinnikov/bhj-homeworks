const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");


tasksAdd.addEventListener('click', function() {
    
        if (taskInput.value.trim() !==""){
            tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
            <div class="task__title">
              ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`);
          taskInput.value='';
          event.preventDefault();
        } 

        const taskRemove = Array.from(document.querySelectorAll('.task__remove'));


taskRemove.forEach(item=>{
  item.addEventListener('click', function(){
    let deletTodo = item.closest('.task');
    console.log(deletTodo);
    deletTodo.remove();
  })
})
})



