const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// function sayHello(item){
//     console.log("hey",item);
// }


function saveTodos(){
    localStorage.setItem("TODOS_KEY",JSON.stringify(toDos));

    
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !==parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo){
    //추가하는 기능
    //console.log("i will paint ",newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click",deleteTodo);
    li.appendChild(span); //자식으로 설정 (안에 넣는다)
    li.appendChild(btn)
    //console.log(li);
    toDoList.appendChild(li); 
}



function handleToDoSubmit(event){

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj ={
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY");
console.log(savedToDos);
if(savedToDos !== null){
    //localStirage에 있는 string를 js object로 변경
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //console.log(parsedToDos);
    //forEach는 array의 각 item에 대해 func을 실행해준다.
    //정리) parsedToDos에 있는 각  item에 대해 consolelog를 할거라는 뜻!
    //=? 애로우 펑션 ~ arrow func
    parsedToDos.forEach(paintToDo);
    //paintToDo는 text를 받는다 자스는 그 텍스트를 painttodo에게 전달
}


function sexyFilter(item){
    //item을 저장할 공간 만들어줘야함

    return item != 3
}

[1,2,3,4,5].filter(sexyFilter);