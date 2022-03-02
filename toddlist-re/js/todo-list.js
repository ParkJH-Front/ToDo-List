const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todoInput")
const todoBox = document.getElementById("todo-box")

const TODONAME = "TODONAME"
let todoArray = []

// todo-box 내 todoInput 값을 넣은 li 요소 생성
function printTodo(event) {
    event.preventDefault()
    const todoText = todoInput.value
    todoInput = ""
    todoObj = {
        text:todoText,
        id:Math.random(0,1)
    }

    localSave(todoText)

    const todoList = document.createElement("li")
    todoList.innerText = todoText
    todoBox.appendChild(todoList)

    console.log(todoArray)
}

function localSave(text) {
    let TODOID = Math.random(0.1)
    const ArrayA = { TODOID : text }
    localStorage.setItem(TODONAME, todoArray)
}

todoForm.addEventListener("submit", printTodo)