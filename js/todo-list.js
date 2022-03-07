const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todo-list");

const TODONAME = "TODONAME";
let todoArray = []


// localStorage 내 JSON 데이터를 저장
function saveTodo() {
    localStorage.setItem(TODONAME, JSON.stringify(todoArray));
}
// todo-box 내 todoInput 값을 넣은 li 요소 생성
function todoHandler(event) {
    event.preventDefault();
    const todoText = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text:todoText,
        id:Math.random(0,1),
    }
    todoArray.push(todoObj);
    
    paintTodo(todoObj);
    saveTodo();
}   

// 실제 todo list의 각 요소들을 생성하는 로직
function paintTodo(todoObj) {
    const todoli = document.createElement("li");
    todoli.className = "list-group-item border-0"
    todoli.id = todoObj.id;
    
    const todospan = document.createElement("span");
    todospan.innerText = `${todoObj.text}  `;
    
    const todoBtn = document.createElement("button");
    todoBtn.innerHTML = "delect";
    todoBtn.className = "btn btn-danger btn-sm"
    todoBtn.addEventListener("click", deleteTodo);

    todoli.appendChild(todospan);
    todoli.appendChild(todoBtn);
    
    todoList.appendChild(todoli);
}

// 삭제 버튼 기능 로직, array.filter 사용 시 type 이 동일해야함
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    // console.log(typeof li.id)
    // console.log(typeof todoArray.pop().id)
    todoArray = todoArray.filter((todo) => String(todo.id) !== String(li.id));
    saveTodo();
}

const checkTodoList = localStorage.getItem(TODONAME);

todoForm.addEventListener("submit", todoHandler);

if (checkTodoList !== null) {
    const updateLocalSave = JSON.parse(checkTodoList);
    todoArray = updateLocalSave;
    updateLocalSave.forEach(paintTodo);
}