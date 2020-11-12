// enables check & delete button to remove items

const listArea = document.querySelector(".todo-list");

listArea.addEventListener("click", function (e) {
    const click = e.target;
    if (click.classList[0] == "button-checked") {
        click.parentElement.classList.toggle("completed");
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