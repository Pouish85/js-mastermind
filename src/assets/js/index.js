import '../styles/index.scss';
import "./display.js";

import {colorsButtonCreation} from "./display.js";
import {attemptsRowsCreation} from "./display.js";
import {hiddenCombination} from "./display.js";
import {currentAttemptDisp} from "./display.js";

//Array of colors that will be used for the game
const colorsList = [ {name: "yellow"}, {name: "blue"}, {name: "red"}, {name: "green"}, {name: "orange"}, {name: "purple"}];

const maxTries = 10;
let currentAttempt = 1;
const hiddenCombinationLength = 4;
let combination = [];


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
    function currentAttempt(combination) {
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


colorsButtonCreation(colorsList);
attemptsRowsCreation(maxTries, currentAttempt);
hiddenCombination(colorsList, hiddenCombinationLength);
currentAttemptDisp(currentAttempt, hiddenCombinationLength);
attempt();