const images = [
    "bgimg_1.png",
    "bgimg_2.png",
    "bgimg_3.png"
]

const bgImg = document.querySelector(".bgImgs")
const choiceImage = images[Math.floor(Math.random() * images.length)]
const randomImage = document.createElement("img")
randomImage.src = `img/${choiceImage}`
bgImg.appendChild(randomImage)


