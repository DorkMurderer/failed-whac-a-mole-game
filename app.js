const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const btnEl = document.getElementById("btn-start")
const grid = document.querySelector(".grid")
const alertDiv = document.querySelector(".score-alert")



let hitPosition
let result = 0
let currentTime = null
let timerId = null
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove("mole")
    })


    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole")



    hitPosition = randomSquare.id
}


btnEl.addEventListener("click", function(){
    grid.classList.remove("hide")
    btnEl.classList.add("hide")
    timeLeft.classList.remove("hide")
    currentTime = 31
})

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
  
    timerId = setInterval(randomSquare, 600)
}


moveMole()



randomSquare()

alertDiv.addEventListener("click", function(){
    window.location.reload()
})

function countDown() {
   currentTime--
   timeLeft.textContent = currentTime

   if (currentTime == 0){
    clearInterval(countdownTimerId)
    clearInterval(timerId)
    grid.classList.add("hide")
    alertDiv.innerText = `GAME OVER! Your score was ${result} Click to play again!`
    alertDiv.classList.remove("hide")

   }
}

let countdownTimerId = setInterval(countDown, 1000)