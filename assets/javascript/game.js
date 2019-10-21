let computerNumber = randomIntBetween(19, 120);
let gemNumbers = ["_", "_", "_", "_"];
let userScore = 0;
let win = 0;
let loss = 0;

const winHolder = $("#win-holder").text(win);
const lossHolder = $("#loss-holder").text(loss);
const targetNumber = $("#target-number").text(computerNumber);
setUp();





//functions
function randomIntBetween(min, max) {
    let randNum = Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    return randNum;
}

function setUp() {
    computerNumber = randomIntBetween(19, 120);
    targetNumber.text(computerNumber);
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

    $(".gem").on("click", function() {
        userScore += parseInt($(this).attr("data-rand-num"));

        compare(userScore, computerNumber);
        $("#score").text(userScore);

    });
}

function compare(userNum, compNum) {
    if (userNum === compNum) {
        console.log("you win");
        win++;
        winHolder.text(win);
        $("#gem-holder").empty();
        setUp();

    } else if (userNum > compNum) {
        console.log("you lose");
        loss++;
        lossHolder.text(loss);
        $("#gem-holder").empty();
        setUp();

    } else {}
}