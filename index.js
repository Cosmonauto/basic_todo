//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//functions
function addTodo(e) {
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa fa-check'></i>";
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //trash
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to the list
    if(todoInput.value === ""){
        alert("You didn't write a todo");
    }
    else{
    todoList.appendChild(todoDiv);
    //clear the input value
    todoInput.value = "";
    }
}


function deleteCheck(e){
    const item = e.target;
    //delete the todo
    if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function(){
        todo.remove();
    });
    }

    //check mark
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


