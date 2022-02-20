const worldForm = document.getElementById("worldForm")
const worldName = document.querySelector("#worldForm input")

const charForm = document.getElementById("characterForm")
const charName = document.querySelector("#characterForm input")

const greeting = document.getElementById("greeting")

const HIDDEN_CLASS = "hidden"
const WORLD_KEY = "worldName"
const CHAR_KEY = "charName"

const checkWorldName = localStorage.getItem(WORLD_KEY)
const checkCharName = localStorage.getItem(CHAR_KEY)

function worldLoginButton(event) {
    const worldValue = worldName.value    

    event.preventDefault()
    localStorage.setItem(WORLD_KEY, worldValue)

    worldForm.classList.add(HIDDEN_CLASS)
    charForm.classList.remove(HIDDEN_CLASS)  

    charForm.addEventListener("submit", charLoginButton)
}

function charLoginButton(event) {
    const charValue = charName.value

    event.preventDefault()    
    localStorage.setItem(CHAR_KEY, charValue)   
    
    charForm.classList.add(HIDDEN_CLASS)
    greeting.classList.remove(HIDDEN_CLASS)
}

function loginCheck() {
    if (checkWorldName === null) {
        worldForm.addEventListener("submit", worldLoginButton)
    } else if(checkCharName === null) {
        charForm.addEventListener("submit", charLoginButton)
    } else {
        worldForm.classList.add(HIDDEN_CLASS)
        greeting.classList.remove(HIDDEN_CLASS)
    }
}

loginCheck()