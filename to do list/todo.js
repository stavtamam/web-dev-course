const todo = document.querySelector(".todo");
const completed = document.querySelector(".completed");

class Person {
    tasks = [];

    addtask() {
        if ($(".title").val() == "") {
            alert("Write Something");
        } else {
            this.tasks.push({
                text: $(".title").val(),
                done: false,
            });
            console.log(this.tasks);
            this.printTasks();
            $(".title").val("");
        }
    }

    printTasks() {
        let todoHTML = "";
        $.each(this.tasks, function (key, val) {
            todoHTML += `<li id= ${key}> <input type= "checkbox" class= "check"></input>
                <span id= "span">${val.text}</span><input class= "editinput editinp"></input>
                <button class= "done done2">Done</button>
                <button class= "edit">Edit</button>
                <button class= "delete" id="delete" ${key}>Delete</button>
                </li>`;
            $(".todo").html(todoHTML);
            $(".delete").on("click", function () {
                console.log(val);

            });
        });
    }
    deleteTask() {
        // document.getElementById(task.text).remove();
        console.log(this.tasks);
        this.printTasks();
    }
    // editTask(task) {
    //     console.log(task.text);
    //     var mission = document.getElementById(task.text);
    //     var editInput = mission.querySelector(".editinput").classList.toggle("editinput");
    //     var editButton = mission.querySelector(".edit").classList.add("edit2");
    //     var done = mission.querySelector(".done").classList.toggle("done2");

    //     console.log(this.tasks);
    // }
    // edit(task) {
    //     var mission = document.getElementById(task.text);
    //     // var index = this.tasks.findIndex((element) => element == task);
    //     var t = mission.querySelector("span");
    //     var editInput = mission.querySelector(".editinp");
    //     if (editInput.value !== task.text) {
    //         task.text = editInput.value;
    //         t.innerText = `${task.text}`;
    //         editInput = mission.querySelector(".editinp").classList.toggle("editinput");
    //         let done = mission.querySelector(".done").classList.toggle("done2");
    //         let editButton = mission.querySelector(".edit").classList.toggle("edit2");
    //         this.printTasks()

    //     } else {
    //         alert("you need to change the input");
    //         t.innerText = `${task.text}`;
    //     }
    //     console.log(this.tasks)
    //     return this.tasks;
    // }
    // completedTask(task) {
    //     let mission = document.getElementById(task.text);
    //     let checkbox = mission.querySelector(".check");
    //     if (checkbox.checked) {
    //         task.done = true;
    //         completed.appendChild(mission);
    //         mission.style.textDecoration = "line-through";
    //         this.deleteTask(task);
    //         console.log(task);

    //     } else {
    //         todo.append(mission);
    //         mission.style.textDecoration = "none";
    //     }
    // }
}

var help = new Person();

help.printTasks();