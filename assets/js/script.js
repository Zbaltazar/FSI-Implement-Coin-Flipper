// TODO: Declare any global variables we need
let flipButton = document.querySelector("#flip")
let clearButton = document.querySelector("#clear")
let headsTable = document.querySelector("#heads")
let headsPercTable = document.querySelector("#heads-percent")
let tailsTable = document.querySelector("#tails")
let tailsPercTable = document.querySelector("#tails-percent")
let statusMessage = document.querySelector("#message")
let image = document.querySelector("#penny-image")

let headsCount = 0
let tailsCount = 0
let total = 0
let headsPerc = 0
let tailsPerc = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click", function(){
        total ++
        let result = Math.round(Math.random() * 101)
        console.log("result is", result)
        if (result < 51) { //heads 0-50
            //picture change
            image.src = "./assets/images/penny-heads.jpg"
            //number of heads in scoreboard
            headsCount ++
            headsTable.textContent = `${headsCount}`
            console.log("headsCount", headsCount)
            //message
            statusMessage.textContent = "You flipped Heads!"
        } else { 
            //picture change
            image.src = "./assets/images/penny-tails.jpg"
            //number of heads in scoreboard
            tailsCount ++
            tailsTable.textContent = `${tailsCount}`
            console.log("tailsCount", tailsCount)
            //message
            statusMessage.textContent = "You flipped Tails!"


        }
        headsPerc = Math.round(headsCount/total * 100)
        tailsPerc = Math.round(tailsCount/total * 100)
        headsPercTable.textContent = `${headsPerc}%`
        tailsPercTable.textContent = `${tailsPerc}%`
    })
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    clearButton.addEventListener("click", function(){
        statusMessage.textContent = "Let's Get Rolling!!"
        headsCount = 0
        headsTable.textContent = `${headsCount}`
        tailsCount = 0
        tailsTable.textContent = `${tailsCount}`
        headsPerc = 0
        tailsPerc = 0
        headsPercTable.textContent = `${headsPerc}%`
        tailsPercTable.textContent = `${tailsPerc}%`
    
    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})