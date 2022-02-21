const images = [
    "행운이1.jpg",
    "행운이2.jpg",
    "행운이3.jpg",
    "행운이4.jpg",
    "행운이5.jpg"
]

const chosenImahe =  images[Math.floor(Math.random() * images.length)]

// hmtl 요소를 가져오는것이 아닌, js 에서 무언갈 생성해서 html에 추가하는 작업을 학습.
const randomImges = document.createElement("img") // 요소를 생성하는 함수.
randomImges.src = `img/${chosenImahe}`
document.body.appendChild(randomImges)