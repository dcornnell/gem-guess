//generate random number for win condition
let randomNumber = randomIntBetween(25, 100);
//generate random numbers for the gems
let gemNumbers = ["_", "_", "_", "-"];
for (let i = 0; i < gemNumbers.length; i++) {
    gemNumbers[i] = randomIntBetween(1, 10);
}
//user score === 0
//wins and losses
//on click
//add to players score
// if playerscore === randomnumber
// win++
//win
//else playerscore > randomnumber
// loss++
//loss

//output wins losses

//functions
function randomIntBetween(min, max) {
    let randNum = Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    return randNum;
}