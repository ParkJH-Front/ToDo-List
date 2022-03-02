const body = document.querySelector("body")

// 랜덤값으로 선정된 이미지를 body에 전달하는 로직
function choiceImg(randomNum) {
    // img 요소 생성
    const img = document.createElement("img")
    
    // src, alt 값 지정 및 클레스 추가
    img.src = `img/bgImg_0${randomNum}.jpg`
    img.alt = "background images"
    img.classList.add("bgImg")

    //body 내 이미지 삽입
    body.appendChild(img)
}

// 랜덤값을 선택하여 choiceImg 으로 전달하는 로직
function getRandom() {
    const ImgNum = 4
    let randomNum = Math.floor(Math.random() * ImgNum) + 1
    choiceImg(randomNum)
}

getRandom()