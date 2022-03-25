// creat const variables
const resetBtn = document.querySelector(".game-reset")
const square1 = document.queerySelector(".box #1")
const square2 = document.queerySelector(".box #2")
const square3 = document.queerySelector(".box #3")
const square4 = document.queerySelector(".box #4")
const square5 = document.queerySelector(".box #5")
const square6 = document.queerySelector(".box #6")
const square7 = document.queerySelector(".box #7")
const square8 = document.queerySelector(".box #8")
const square9 = document.queerySelector(".box #9")

// add event listeners for each square
// when clicked they should be able to turn blue or red
//  and not be able to be clicked by other player
let s1 = square1 
square1.addEventListener("click", () => {
    s1.style.backgroundColor = rgb(37, 204, 255);
})


let boardSpot = document.getElementById("#1 #3 #4 #5 #6 #7 #8 #9")
function player1 () {
    if 
}