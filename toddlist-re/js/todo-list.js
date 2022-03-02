const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todo-list")

const TODONAME = "TODONAME"
let todoArray = []

function saveArray() {
    localStorage.setItem(TODONAME, JSON.stringify(todoArray))
}
// todo-box 내 todoInput 값을 넣은 li 요소 생성
function todoHandler(event) {
    event.preventDefault()
    const todoText = todoInput.value
    todoInput.value = ""
    const todoObj = {
        text:todoText,
        id:Math.random(0,1),
    }
    todoArray.push(todoObj)
    
    paintTodo(todoObj)
    saveArray()
}

function paintTodo(todoObj) {
    const todoli = document.createElement("li")
    todoli.id = todoObj.id
    const todospan = document.createElement("span")
    todospan.innerText = todoObj.text
    const todoBtn = document.createElement("button")
    todoBtn.innerHTML = "✔"
    todoBtn.addEventListener("click", delectTodo)

    todoli.appendChild(todospan)
    todoli.appendChild(todoBtn)
    
    todoList.appendChild(todoli)
}


function delectTodo(event) {
    const li = event.target.parentElement
    li.remove()

    // todoArray = todoArray.filter((todoArray) => todoArray.id !== parseInt(li.id))
    todoArray = todoArray.filter((toDo) => toDo.id !== parseInt(li.id))
    saveArray()
}

const checkTodoList = localStorage.getItem(TODONAME)

todoForm.addEventListener("submit", todoHandler)

if (checkTodoList !== null) {
    const updateLocalSave = JSON.parse(checkTodoList)
    updateLocalSave.forEach((item) => paintTodo(item))
}