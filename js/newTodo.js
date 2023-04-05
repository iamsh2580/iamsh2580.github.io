
const todoInput=document.querySelector("#todo-input");
const addBtn=document.querySelector("#add-button");
const todoList=document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded",getLocal);
addBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",manageTodo);

function addTodo(e){
    e.preventDefault();
    const newDiv=document.createElement("div");
    newDiv.classList.add("todo");

    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-content");
    newDiv.appendChild(newTodo);

    saveToLocal(todoInput.value);

    const completeBtn=document.createElement("button");
    completeBtn.innerText="완료";
    completeBtn.classList.add('complete-btn');
    newDiv.appendChild(completeBtn);

    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="삭제";
    deleteBtn.classList.add("delete-btn");
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
    todoInput.value="";
}

function saveToLocal(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
function getLocal(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        const newDiv=document.createElement("div");
        newDiv.classList.add("todo");
        const newTodo=document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-content");
        newDiv.appendChild(newTodo);

        const completeBtn=document.createElement("button");
        completeBtn.innerText="완료";
        completeBtn.classList.add("complete-btn");
        newDiv.appendChild(completeBtn);

        const deleteBtn=document.createElement("button");
        deleteBtn.innerText="삭제";
        deleteBtn.classList.add("delete-btn");
        newDiv.appendChild(deleteBtn);

        todoList.appendChild(newDiv);

        todoInput.value="";
    });

}

function manageTodo(e){
    const whichButton=e.target.classList[0];
    if(whichButton ==='complete-btn'){
        const todo=e.target.parentElement;
        todo.children[0].toggle('completed');
    }else if(whichButton ==='delete-btn'){
        const todo=e.target.parentElement;
        removeLocal(todo);
        todo.remove();
    }


    function removeLocal(todo){
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[];
        }else{
            todos=JSON.parse(localStorage.getItem("todos"));
        }
        const index=todos.indexOf(todo.children[0].innerText);
        //console.log(index);
        todos.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(todos));
    }
}

