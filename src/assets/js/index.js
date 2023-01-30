import '../styles/index.scss';
import "./display.js";
import { boardCreation } from './display.js';

//Array of colors that will be used for the game
const colorsList = [ {name: "yellow"}, {name: "blue"}, {name: "red"}, {name: "green"}, {name: "orange"}, {name: "purple"}];

const maxTries = 10;
let currentAttempt = 1;
const hiddenCombinationLength = 4;
let combination = [];
const randomChoice = [];

//hidden combination creation
function hiddenCombination() {
    const colors = colorsList.map(color => color.name);
    for (let i = 0; i < hiddenCombinationLength; i++) {
        let randomOneChoice = colors[Math.floor(Math.random() * colors.length)];
        randomChoice.push(randomOneChoice);
        
    }
    console.log(randomChoice);
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
                alert(`Vous ne pouvez pas avoir une combinaison supperieure à ${hiddenCombinationLength} couleurs!`)
            }
            console.log(combination);
        })
    }

    //display of the current combination in th the currentAttempt row
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
        alert(`Félicitation vous avez trouvé la bonne combinaison en ${currentAttempt} tentative${currentAttempt >= 2 ? "s" : ""}`)
    } else if (currentAttempt < maxTries) {
        savePreviousAttempts();
        alert("Ce n'est pas la bonne combinaison, recommencez!")
        reset();
        currentAttempt += 1;
        updateTry();
    } else {
        combinationReveal();
        savePreviousAttempts();
        alert("Désolé c'est perdu, vous n'avez pas trouvé la bonne combinaison")
    }
}

//function for updating try number
function updateTry () {
    const tryHtml = document.querySelector(".status");
    tryHtml.innerText = `Tentative ${currentAttempt} / ${maxTries}`
}

const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener('click', () => {
    reset();
})

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', () => {
    submit();
})

hiddenCombination();
boardCreation(colorsList, maxTries, currentAttempt, hiddenCombinationLength)
attempt();