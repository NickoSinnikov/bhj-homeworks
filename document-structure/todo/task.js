const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");


tasksAdd.addEventListener('click', function(event) {
    event.preventDefault();
    if (taskInput.value.trim() !== "") {
        tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
            <div class="task__title">
              ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`);
        taskInput.value = '';
    }

    const taskRemove = (tasksList.lastChild.querySelector('.task__remove'));
    taskRemove.addEventListener('click', (event) => {
        event.preventDefault();
        let deletTodo = taskRemove.closest('.task');
        deletTodo.remove();
    })
})