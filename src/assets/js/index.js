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
const hiddenComnationLength = 4;


colorsButtonCreation(colorsList);
attemptsRowsCreation(maxTries, currentAttempt);
hiddenCombination(colorsList, hiddenComnationLength);
currentAttemptDisp(currentAttempt, hiddenComnationLength);