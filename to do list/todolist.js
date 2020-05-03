var btn = document.querySelector(".add");
var todo = document.querySelector(".todo");
var completed = document.querySelector(".completed")
var inputval = document.querySelector(".title");
inputval = document.querySelector(".title");
var t = document.createElement("span");



class Person {
    tasks = []
    task = {
        done: false,
        id: 0
    }
    addtask() {
        if (inputval.value == "") {
            alert("Write Something");

        } else {
            this.tasks.push(inputval.value);
            console.log(this.tasks);
            this.printTasks();
            localStorage.setItem('tasks', this.tasks);
            this.task.id++
            inputval.value = "";
        }
    }

    printTasks() {
        todo.innerHTML = "";
        this.tasks.forEach(task => {
            var li = document.createElement("li");
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.classList.add("check");
            var t = document.createElement("span");
            t.id = "span";
            li.setAttribute('id', task);
            li.setAttribute('class', task);
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
            editInput.value = task;
            // deleteButton.onclick = function () {
            //     this.deleteTask(task);
            // }.bind(this);
            deleteButton.onclick = () => this.deleteTask(task)
            editButton.onclick = () => this.editTask(task);
            done.onclick = () => this.edit(task);
            checkbox.onchange = () => this.completedTask(task);



            li.appendChild(checkbox);
            li.appendChild(t).innerHTML = task;
            li.appendChild(editInput);
            li.appendChild(done);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            todo.appendChild(li);
        });
    }
    deleteTask(task) {

        var index = this.tasks.findIndex((element) => element == task);
        this.tasks.splice(index, 1);
        document.getElementById(task).remove();
        console.log(this.tasks);
    }
    editTask(task) {
        var mission = document.getElementById(task);
        var editInput = mission.querySelector(".editinput").classList.toggle("editinput");
        var editButton = mission.querySelector(".edit").classList.add("edit2");
        var done = mission.querySelector(".done").classList.toggle("done2");

        console.log(this.tasks);
    }
    edit(task) {
        var mission = document.getElementById(task);
        var index = this.tasks.findIndex((element) => element == task);
        var t = mission.querySelector("span");
        var editInput = mission.querySelector(".editinp");
        if (editInput.value !== task) {
            this.tasks.splice(index, 1, editInput.value);
            t.innerHTML = editInput.value;
            editInput = mission.querySelector(".editinp").classList.toggle("editinput");
            var done = mission.querySelector(".done").classList.toggle("done2");
            var editButton = mission.querySelector(".edit").classList.toggle("edit2");

        } else {
            alert("you need to change the input");
        }
        console.log(this.tasks)
        return this.tasks;
    }
    completedTask(task) {
        var mission = document.getElementById(task);
        var li = mission.querySelector("li");
        var checkbox = mission.querySelector(".check");
        if (checkbox.checked) {
            completed.appendChild(mission);
            mission.style.textDecoration = "line-through";

        } else {
            todo.append(mission);
            mission.style.textDecoration = "none";
        }
    }

}

var help = new Person;

help.printTasks();