const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODO_KEY = "todo-list"
let toDoArray = [] // todolist 작성 내용을 localstorage에 저장하기 위한 배열.

function paintToDo(newToDo){ //li, span 통한 투두 리스트를 생성하는 함수.
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span)
    li.id = newToDo.id
    span.innerText = newToDo.text
    toDoList.appendChild(li)

    const button = document.createElement("button") // 버튼을 누르면 작동하는 이벤트 리스너 생성
    button.innerText = "❌"
    li.appendChild(button)
    button.addEventListener("click", deleteToDo)
}

function handleToDoSubmit(event) { // input 입력값 내 사용자의 value 를 받는 곳.
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newToDoObj = { 
        text:newToDo,
        id:Date.now()
    }
    toDoArray.push(newToDoObj) // newToDoObj 내 입력된 오브젝트 을 toDoArray 배열에 추가함.
    paintToDo(newToDoObj) 
    saveToDo() 
}

function saveToDo() { // todoList 배열을 localstroage 내 저장하는 함수.
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray))
}

function deleteToDo(event) { // 주의사항 : 버튼을 누를 시 어떤 리스트를 삭제할 지 결정하는 로직을 구현해야함.
    const li = event.target.parentElement
    li.remove()

    toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDo()
}

const savedToDoList = localStorage.getItem(TODO_KEY) 

toDoForm.addEventListener("submit", handleToDoSubmit)

if (savedToDoList !== null) {
    const parsedToDoList = JSON.parse(savedToDoList)
    parsedToDoList.forEach((item) => paintToDo(item))
}