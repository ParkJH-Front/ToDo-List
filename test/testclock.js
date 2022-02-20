const clock = document.getElementById("clock")
const dDay = new Date("2022-12-24:00:00:00")

function dayCounting() {
    const toDay = new Date()
    const diff = dDay - toDay
    const days = Math.floor(diff / (1000*60*60*24))
    const hours = Math.floor(diff / (1000*60*60) % 24)
    const minutes = Math.floor(diff / (1000*60) % 60)
    const seconds = Math.floor(diff / 1000 % 60)

    clock.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

dayCounting()
setInterval(dayCounting, 1000)

//ms 계산법 나중에 다시한번 복습하자 ...