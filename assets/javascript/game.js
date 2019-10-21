let computerNumber = randomIntBetween(19, 120);

let gemNumbers = ["_", "_", "_", "_"];
// for (let i = 0; i < gemNumbers.length; i++) {
//     gemNumbers[i] = randomIntBetween(1, 12);
// }
let userScore = 0;
let win = 0;
let loss = 0;
// set up ids

setUp();

//on click
$("#win-holder").text(win);
$("#loss-holder").text(loss);
$("#target-number").text(computerNumber);



$(".gem").on("click", function() {
    userScore += parseInt($(this).attr("data-rand-num"));

    compare(userScore, computerNumber);
    $("#score").text(userScore);

});


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
        $("#gem-holder").empty();
        setUp();

    } else if (userNum > compNum) {
        console.log("you lose");
        loss++;
        $("#loss-holder").text(loss);
        $("#gem-holder").empty();
        setUp();

    } else {}
}

function setUp() {
    computerNumber = randomIntBetween(19, 120);
    userScore = 0

    for (let i = 0; i < gemNumbers.length; i++) {
        gemNumbers[i] = randomIntBetween(1, 12);
    }

    for (let i = 0; i < gemNumbers.length; i++) {
        const gem = $("<div>");
        gem.addClass("gem");
        gem.attr("data-rand-num", gemNumbers[i]);
        $("#gem-holder").append(gem);
    }
};