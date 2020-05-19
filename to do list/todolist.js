const todo = document.querySelector(".todo");
const completed = document.querySelector(".completed")
const inputval = document.querySelector(".title");



class Person {
    tasks = []

    addtask() {
        if (inputval.value == "") {
            alert("Write Something");

        } else {
            this.tasks.push({
                text: inputval.value,
                done: false,
                id: 0
            });
            console.log(this.tasks);
            this.printTasks();
            localStorage.setItem('tasks', this.tasks);
            inputval.value = "";
        }

    }

    printTasks() {
        let todoHTML = "";
        this.tasks.forEach(task => {
            if (!task.done) {
                console.log(task);
                // todoHTML +=
                //     `<li id= ${task.text}> <input type= "checkbox" class= "check"></input>
                // <span id= "span">${task.text}<input class= "editinput editinp"></input>
                // <button class= "done done2">Done</button>
                // <button class= "edit">Edit</button>
                // <button class= "delete" id="delete">Delete</button>
                // </span>
                // </li>`;
                // todo.innerHTML = todoHTML;

                // const mission = document.getElementById(task.text);
                // let deleteButton = document.querySelector(".delete");
                // let editButton = document.querySelector(".edit");
                // let done = document.querySelector(".done");
                // let checkbox = document.querySelector(".check");
                var li = document.createElement("li");
                var checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.classList.add("check");
                var t = document.createElement("span");
                t.id = "span";
                li.setAttribute('id', task.text);
                li.setAttribute('class', task.text);
                var editButton = document.createElement("button");
                editButton.innerText = "Edit";
                editButton.className = "edit";
                var deleteButton = document.createElement("button");
                deleteButton.innerText = "Delete";
                deleteButton.className = "delete";
                var editInput = document.createElement("input");
                editInput.classList.add("editinput", "editinp");
                var done = document.createElement("button");
                done.innerText = "Done";
                done.classList.add("done", "done2");
                editInput.value = task.text;


                li.appendChild(checkbox);
                li.appendChild(t).innerHTML = task.text;
                li.appendChild(editInput);
                li.appendChild(done);
                li.appendChild(editButton);
                li.appendChild(deleteButton);
                todo.appendChild(li);

                deleteButton.onclick = () => this.deleteTask(task);
                editButton.onclick = () => this.editTask(task);
                done.onclick = () => this.edit(task);
                checkbox.onchange = () => this.completedTask(task);
            }
        });

    }
    deleteTask(task) {
        var index = this.tasks.findIndex((element) => element == task);
        this.tasks.splice(index, 1);
        // document.getElementById(task.text).remove();
        console.log(this.tasks);
        this.printTasks();
    }
    editTask(task) {
        console.log(task.text);
        var mission = document.getElementById(task.text);
        var editInput = mission.querySelector(".editinput").classList.toggle("editinput");
        var editButton = mission.querySelector(".edit").classList.add("edit2");
        var done = mission.querySelector(".done").classList.toggle("done2");

        console.log(this.tasks);
    }
    edit(task) {
        var mission = document.getElementById(task.text);
        // var index = this.tasks.findIndex((element) => element == task);
        var t = mission.querySelector("span");
        var editInput = mission.querySelector(".editinp");
        if (editInput.value !== task.text) {
            task.text = editInput.value;
            t.innerText = `${task.text}`;
            editInput = mission.querySelector(".editinp").classList.toggle("editinput");
            let done = mission.querySelector(".done").classList.toggle("done2");
            let editButton = mission.querySelector(".edit").classList.toggle("edit2");
            this.printTasks()

        } else {
            alert("you need to change the input");
            t.innerText = `${task.text}`;
        }
        console.log(this.tasks)
        return this.tasks;
    }
    completedTask(task) {
        let mission = document.getElementById(task.text);
        let checkbox = mission.querySelector(".check");
        if (checkbox.checked) {
            task.done = true;
            completed.appendChild(mission);
            mission.style.textDecoration = "line-through";
            this.deleteTask(task);
            console.log(task);

        } else {
            todo.append(mission);
            mission.style.textDecoration = "none";
        }
    }

}

var help = new Person;

help.printTasks();