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
    return randomChoice;
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
            let firstColor = combinationHTML.children[1];
            firstColor.setAttribute("id", `${combination[0]}`);
            console.log(`combinaison[0] ${combination[0]}`)
        } else if (combination.length == 2) {
            let secondColor = combinationHTML.children[2];
            secondColor.setAttribute("id", `${combination[1]}`);
        } else if (combination.length == 3) {
            let thirdColor = combinationHTML.children[3];
            thirdColor.setAttribute("id", `${combination[2]}`);
        } else if (combination.length == 4) {
            let fourthColor = combinationHTML.children[4];
            fourthColor.setAttribute("id", `${combination[3]}`);
        }
    }
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
        alert(`Félicitation vous avez trouvé la bonne combinaison en ${currentAttempt} tentative${currentAttempt >= 2 ? "s" : ""}`)
    } else if (currentAttempt < maxTries) {
        alert("Ce n'est pas la bonne combinaison, recommencez!")
        reset();
        currentAttempt += 1;
        updateTry();
    } else {
        alert("Désolé, vous n'avez pas trouvé la bonne combinaison")
    }
}

//function for updating try number
function updateTry () {
    const tryHtml = document.querySelector(".status");
    tryHtml.innerText = "";
    tryHtml.innerText = `Tentative ${currentAttempt} / ${maxTries}`
}

const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener('click', event => {
    reset();
})

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', event => {
    submit();
})

hiddenCombination();
boardCreation(colorsList, maxTries, currentAttempt, hiddenCombinationLength)
attempt();

