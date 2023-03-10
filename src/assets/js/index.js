import '../styles/index.scss';
import { boardCreation } from './display.js';
import { screenBoard } from './screenBoard';

//Array of colors that will be used for the game
const colorsList = [ {name: "yellow"}, {name: "blue"}, {name: "red"}, {name: "green"}, {name: "orange"}, {name: "purple"}];

const screen = document.getElementById("screen");
const maxTries = 10;
let currentAttempt = 1;
const hiddenCombinationLength = 4;
let combination = [];
let randomChoice = [];
let rightPlace = 0;
let wrongPlace = 0;

//hidden combination creation
function hiddenCombination() {
    const colors = colorsList.map(color => color.name);
    for (let i = 0; i < hiddenCombinationLength; i++) {
        let randomOneChoice = colors[Math.floor(Math.random() * colors.length)];
        randomChoice.push(randomOneChoice);
    }
}

//function for revealing the hidden combination at the end game
function combinationReveal () {
    const hiddenRow = document.getElementById("hiddenCombination");
    hiddenRow.children[0].id = randomChoice[0];
    hiddenRow.children[1].id = randomChoice[1];
    hiddenRow.children[2].id = randomChoice[2];
    hiddenRow.children[3].id = randomChoice[3];
}

//function for pushed colorsButtons be add in combination array
function attempt () {
    const btns = document.querySelectorAll('.color-btn');

    for (let btn of btns) {
        btn.addEventListener('click', function() {
            if (combination.length < hiddenCombinationLength) {
                combination.push(btn.id);
                currentAttempt(combination);
            } else {
                screen.innerText = "";
                screen.innerText = `Vous ne pouvez pas avoir une combinaison supperieure à ${hiddenCombinationLength} couleurs!`;
            }
        })
    }

    //display of the current combination in the currentAttempt row
    function currentAttempt() {
        let combinationHTML = document.querySelector("#currentAttempt");
        if (combination.length == 1) {
            combinationHTML.children[1].id = combination[0];
        } else if (combination.length == 2) {
            combinationHTML.children[2].id = combination[1];
        } else if (combination.length == 3) {
            combinationHTML.children[3].id = combination[2];
        } else if (combination.length == 4) {
            combinationHTML.children[4].id = combination[3];
        }
    }
}

//function for saving previous combinations on the game board
function savePreviousAttempts () {
    const attempt = document.querySelector(`.attempt${currentAttempt}`);
    attempt.children[1].id = combination[0];
    attempt.children[2].id = combination[1];
    attempt.children[3].id = combination[2];
    attempt.children[4].id = combination[3];
}

//function for reset the current attempt, it can be used before or after submit
function reset() {
    combination = [];
    const currentAttempt = document.getElementById("currentAttempt");
    for (let i = 1; i < 5; i++) {
        currentAttempt.children[i].id = "white";
    }
}

//function for submitting the current combination
function submit() {
    //check if the combination is identical to the hidden one
    if (combination.toString() === randomChoice.toString()) {
        savePreviousAttempts();
        combinationReveal();
        screen.innerText = "";
        screen.innerText = `Félicitation vous avez trouvé la bonne combinaison en ${currentAttempt} tentative${currentAttempt >= 2 ? "s" : ""}`;
    } else if (currentAttempt < maxTries) {
        savePreviousAttempts();
        compare();
        screen.innerText = `Ce n'est pas la bonne combinaison${rightPlace >= 1 | wrongPlace >=1 ? `, vous avez ${rightPlace >=1 ? `${rightPlace} couleur${ rightPlace >=2 ? "s" : ""} bien placée${ rightPlace >=2 ? "s" : ""}` : ""} ${rightPlace >=1 && wrongPlace >=1 ? "et " : ""}${wrongPlace >=1 ? `${wrongPlace} couleur${ wrongPlace >=2 ? "s" : ""} mal placée${ wrongPlace >=2 ? "s" : ""}`: ""}` : "."}`;
        reset();
        currentAttempt += 1;
        updateTry();
    } else {
        combinationReveal();
        savePreviousAttempts();
        compare();
        screen.innerText = "Désolé c'est perdu, vous n'avez pas trouvé la bonne combinaison";
    }
}

//function for updating try number
function updateTry () {
    const tryHtml = document.querySelector(".status");
    tryHtml.innerText = `Tentative ${currentAttempt} / ${maxTries}`
}

//function that compare hiddenCombination and current for giving hints to user
function compare () {
    let checkCombination = [...combination];
    rightPlace = 0;
    wrongPlace = 0;

    for (let i = 0; i < randomChoice.length; i++) {
        if (randomChoice[i] === checkCombination[i]) {
            checkCombination.splice(i, 1, "X");
            rightPlace++;
        }else if (checkCombination.includes(randomChoice[i])) {
            wrongPlace++;
        }
    }

    const hints = [];
    for (let i = 0; i < rightPlace; i++) {
        hints.push("black");
    };
    for (let i = 0; i < wrongPlace; i++) {
        hints.push("white")
    };
    for (let i = hints.length; i < hiddenCombinationLength; i++) {
        hints.push("transparent");
    }

    const resultsHint = document.querySelector(`.results${currentAttempt}`);
    resultsHint.children[0].id = hints[0];
    resultsHint.children[1].id = hints[1];
    resultsHint.children[2].id = hints[2];
    resultsHint.children[3].id = hints[3];
}

//cancel Button
const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener('click', () => {
    reset();
})

//submit button
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', () => {
    submit();
})

//function for starting the game
function game () {
    boardCreation(colorsList, maxTries, currentAttempt, hiddenCombinationLength);
    screenBoard();
    hiddenCombination();
    attempt();
};

game();