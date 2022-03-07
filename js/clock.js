const clockBox = document.getElementById("colckBox")
const fullTime = document.getElementById("clock")

function toDay() {
    const time = new Date
    // 연, 월, 일 (padStart (최소 자리수, 빈공간에 체울 수) <= Sting에만 적용 가능)
    const year = String(time.getFullYear()).padStart(2, 0)
    const mon = String(time.getMonth() + 1).padStart(2, 0)
    const day = String(time.getDate()).padStart(2, 0)
    // 시, 분, 초
    const Hour = String(time.getHours()).padStart(2, 0)
    const min = String(time.getMinutes()).padStart(2, 0)
    const sec = String(time.getSeconds()).padStart(2, 0)
    // 실제 출력 텍스트 전달 ``(백틱) 내 값을 넣으면 변수와 텍스트를 편리하게 전달할 수 있다.
    fullTime.innerText = `${year}.${mon}.${day}  ${Hour}:${min}:${sec}`
}

toDay()
setInterval(toDay, 1000)