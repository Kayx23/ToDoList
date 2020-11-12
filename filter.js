const filterOption = document.querySelector("#filter");
// const listArea = document.querySelector(".todo-list"); defined in check-detete.js

filterOption.addEventListener("change", function (e) {
    // listen to change here, not click, otherwise it's triggered when the fropdown is clicked, not when it's changed
    const toDo = listArea.children;
    for (task of toDo) {
        switch (e.target.value) {
            case "all":
                task.style.display = "flex";  // since we used flex in css
                break;
            case "completed":
                if (!task.classList.contains('completed')) {
                    task.style.display = "none";
                } else {
                    task.style.display = "flex";
                }
                break;
            case "outstanding":
                if (!task.classList.contains('completed')) {
                    task.style.display = "flex";
                } else {
                    task.style.display = "none";
                }
                break;
        }
    }
})