const clock = document.getElementById("clock")

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `Now is : ${hours}:${minutes}:${seconds}`
}
// tip ctrl + shift + L 하면 동일 단어 끝에 동시에 커서가 생김!

getClock() // 처음 1초 빈 영역의 실행을 위해 있는 한줄.
setInterval(getClock, 1000)

// 이대로 하면 표기 형식이 0~9 초는 1자리 그 이후는 2자리라 맘에안듬
// 시간 표기도 좀 정리가 필요해보임.