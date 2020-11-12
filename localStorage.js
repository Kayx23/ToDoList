function saveToLocalStorage(todo) {
    // todo is a string value

    // checking local storage
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function removeFromLocalStorage(todo) {
    // todo is a string value

    let todos;
    todos = JSON.parse(localStorage.getItem('todos'));
    // remove from array; array.splice(index,how-many,optional new items)
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function addFromLocalStorage() {
    // initialize items from local storage after loading DOM
    let todos;
    if (localStorage.getItem('todos') != null) {
        todos = JSON.parse(localStorage.getItem('todos')); // todos is an array

        // add items to the list
        todos.forEach(function (todo) {

            // add Task html structure
            /* <div class="task-container">
                <li class="task"></li>
                <button>delete</button>
                <button>checked</button>
            </div> */

            const divTask = document.createElement("div");
            divTask.classList.add("task-container");

            const liTask = document.createElement("li");
            liTask.innerText = todo;
            liTask.classList.add("task");
            divTask.appendChild(liTask)

            const buttonChecked = document.createElement("button");
            buttonChecked.innerHTML = '<i class="far fa-check-circle"></i>';
            buttonChecked.classList.add("button-checked");
            divTask.appendChild(buttonChecked)

            const buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
            buttonDelete.classList.add("button-delete");
            divTask.appendChild(buttonDelete)

            todoList.appendChild(divTask)
        })
    }
}
addFromLocalStorage()