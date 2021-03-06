const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    }
]

const quoteBox = document.querySelector("#quote")
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

// 랜덤 명언을 뽑아서 각 span 요소에 전달하는 로직
function getRandomQuote() {
    //랜덤값을 뽑는 변수 Math.floor 통해 소숫점을 반올림한다.
    const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerText = toDayQuote.quote
    author.innerText = toDayQuote.author
}

getRandomQuote()
// Interval (함수, 반복기준시간)
setInterval(getRandomQuote, 5000)

quoteBox.addEventListener("click", getRandomQuote)