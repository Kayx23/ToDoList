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

function updateCompleteLocalStorage(action, todo) {
    // action: "add" or "remove"
    // todo is a string for the item
    let completed;
    if (localStorage.getItem('completed') === null) {
        completed = [];
    } else {
        completed = JSON.parse(localStorage.getItem('completed'));
    }

    if (action === "add") {
        completed.push(todo)
    } else if (action === "remove") {
        completed.splice(completed.indexOf(todo), 1);
    }
    localStorage.setItem("completed", JSON.stringify(completed));
}

function addFromLocalStorage() {
    // --- initialize items from local storage upon loading DOM, and check the competed items
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
            divTask.appendChild(buttonDelete);

            todoList.appendChild(divTask);
        })
    };

    // --- check the completed items
    let completed;
    if (localStorage.getItem('completed') != null) {
        completed = JSON.parse(localStorage.getItem('completed'));

        const allTasks = document.querySelectorAll(".task");
        allTasks.forEach(function (task) {
            if (completed.includes(task.innerText)) {
                // if an item is in the completed list, check it
                task.parentElement.classList.add("completed");
            }
        })
    }
}

addFromLocalStorage()