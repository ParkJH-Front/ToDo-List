const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const body = document.querySelector("body")
const button = document.querySelector("body button")

function bgColor() {
    const ramdomColor = colors[Math.floor(Math.random() * colors.length)]
    return ramdomColor
} 

function colorChange() {
    const startColor = bgColor()
    const endColor = bgColor()
    if (startColor != endColor) {
        body.style.background = `linear-gradient(0.25turn, ${startColor}, ${endColor})`
    } else {
        colorChange()
    }
}

// button.addEventListener("click", colorChange)
setInterval(colorChange, 50)