// enables check & delete button to remove items

const listArea = document.querySelector(".todo-list");

listArea.addEventListener("click", function (e) {
    const click = e.target;
    if (click.classList[0] == "button-checked") {
        const item = click.parentElement;
        // toggling on click
        item.classList.toggle("completed");
        if (item.classList.contains("completed")) {
            // add the completed task to the completed list
            updateCompleteLocalStorage("add", item.children[0].innerText);
        } else {
            // remove the task from the completed list
            updateCompleteLocalStorage("remove", item.children[0].innerText);
        }


    }
    else if (click.classList[0] == "button-delete") {
        const item = click.parentElement;
        item.classList.add("fall");
        item.addEventListener("transitionend", function () {
            item.remove();
        })
        // placing this inside transitionend even listener will result in calling multiple times...
        // because transitionend fires for each PROPERTY transitioned
        removeFromLocalStorage(item.children[0].innerText);
    }
})