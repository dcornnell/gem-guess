let computerNumber = randomIntBetween(25, 50);

let gemNumbers = ["_", "_", "_", "-"];
for (let i = 0; i < gemNumbers.length; i++) {
    gemNumbers[i] = randomIntBetween(1, 10);
}
let userScore = 0;
let win = 0;
let loss = 0;
// set up ids
const gemOne = $("#gem-1");
const gemTwo = $("#gem-2");
const gemThree = $("#gem-3");
const gemFour = $("#gem-4");
console.log(computerNumber);
//on click
$(document).ready(function() {
    gemOne.click(function() {
        userScore += gemNumbers[0];
        compare(userScore, computerNumber)
        console.log(userScore);
    });

    gemTwo.click(function() {
        userScore += gemNumbers[1];
        compare(userScore, computerNumber)
        console.log(userScore);
    });

    gemThree.click(function() {
        userScore += gemNumbers[2];
        compare(userScore, computerNumber)
        console.log(userScore);
    });

    gemFour.click(function() {
        userScore += gemNumbers[3];
        compare(userScore, computerNumber)
        console.log(userScore);
    });


    //add to players score
    // if playerscore === randomnumber
    // win++
    //win
    //else playerscore > randomnumber
    // loss++
    //loss

    //output wins losses
});
//functions
function randomIntBetween(min, max) {
    let randNum = Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    return randNum;
}

function compare(userNum, compNum) {
    if (userNum === compNum) {
        console.log("you win");
    } else if (userNum > compNum) {
        console.log("you lose");
    } else {}
}