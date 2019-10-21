let computerNumber = randomIntBetween(19, 120);

let gemNumbers = ["_", "_", "_", "_"];
for (let i = 0; i < gemNumbers.length; i++) {
    gemNumbers[i] = randomIntBetween(1, 12);
}
let userScore = 0;
let win = 0;
let loss = 0;
// set up ids
for (let i = 0; i < gemNumbers.length; i++) {
    const gem = $("<div>");
    gem.addClass("gem");
    gem.attr("data-rand-num", gemNumbers[i]);
    $("#gem-holder").append(gem);
}

console.log(computerNumber);
//on click
$("#win-holder").text(win);
$("#loss-holder").text(loss);
$("#target-number").text(computerNumber);

$(".gem").on("click", function() {
    userScore += parseInt($(this).attr("data-rand-num"));
    console.log(userScore);
    compare(userScore, computerNumber);
    $("#score").text(userScore);
});



// $(document).ready(function() {
//     gemOne.click(function() {
//         userScore += gemNumbers[0];
//         compare(userScore, computerNumber)
//         console.log(userScore);
//     });




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

function compare(userNum, compNum) {
    if (userNum === compNum) {
        console.log("you win");
        win++;
        $("#win-holder").text(win);



    } else if (userNum > compNum) {
        console.log("you lose");
        loss++;
        $("#loss-holder").text(loss);

    } else {}
}