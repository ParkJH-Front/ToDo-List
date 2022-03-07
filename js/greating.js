const loginForm = document.getElementById("loginForm")
const loginInput = document.getElementById("loginInput")
const greeting = document.getElementById("greeting")
const contents = document.getElementById("contents")

const HIDDEN = "hidden"
const USERNAME = "userName"

// 함수 실행 시 입력값을 localStorage 내 저장 로직
function loginHandler(event) {
    event.preventDefault()
    const loginID = loginInput.value
    loginInput.value = ""
    localStorage.setItem(USERNAME, loginID)

    loginForm.classList.add(HIDDEN)
    loginFormHandler(loginID)
};

// 인사 문구 출력 로직s
function loginFormHandler(USERID) {
    greeting.classList.remove(HIDDEN)
    contents.classList.remove(HIDDEN)
    greeting.innerText = `HI ${USERID}, Check TodoList`
}

const checkUserName = localStorage.getItem(USERNAME)

// localStorage 내 값 검증을 통해 loginForm 출력 및 Handler 동작 결정 로직
if (checkUserName !== null) {
    loginForm.classList.add(HIDDEN)
    contents.classList.add(HIDDEN)
    loginFormHandler(checkUserName)
} else {
    loginForm.addEventListener("submit", loginHandler)
}