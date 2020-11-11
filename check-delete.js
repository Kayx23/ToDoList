// enables check & delete button to remove items

const listArea = document.querySelector(".todo-list");

listArea.addEventListener("click", function (e) {
    const item = e.target;
    if (item.classList[0] == "button-checked") {
        // item.parentElement.classList.toggle("completed");
        item.parentElement.remove();
    }
    else if (item.classList[0] == "button-delete") {
    }
})