/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/assets/js/display.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attemptsRowsCreation": () => (/* binding */ attemptsRowsCreation),
/* harmony export */   "colorsButtonCreation": () => (/* binding */ colorsButtonCreation),
/* harmony export */   "currentAttemptDisp": () => (/* binding */ currentAttemptDisp),
/* harmony export */   "hiddenCombination": () => (/* binding */ hiddenCombination)
/* harmony export */ });
// //function for generating and displaying colors buttons
function colorsButtonCreation(colorsList) {
  let colorsButtonHTML = colorsList.map(color => `
        <button 
        class="colors color-btn" 
        id="${color.name}">
        </button>
        `).join('');
  document.getElementById('colorBtn').innerHTML = colorsButtonHTML;
}

//function for generating and displaying all the attempts rows
function attemptsRowsCreation(maxTries, currentAttempt) {
  let i;
  let arrayTries = [];
  for (i = currentAttempt; i <= maxTries; i++) {
    arrayTries.push(i);
  }
  let attemptsRowHTML = arrayTries.map(value => `
        <div class="attempt${value} row">
                <button class="number" id="black">${value}</button>
                <buton class="colors one" id="white"></buton>
                <buton class="colors two" id="white"></buton>
                <buton class="colors three" id="white"></buton>
                <buton class="colors four" id="white"></buton>
                <div class="results${value} square">
                    <button class="resultsColors one" id=""></button>
                    <button class="resultsColors two" id=""></button>
                    <button class="resultsColors three" id=""></button>
                    <button class="resultsColors four" id=""></button>
                </div>
            </div>
        
        `).join('');
  document.getElementById("attemptsContainer").innerHTML = attemptsRowHTML;
}

//function for gererating and displaying random combination row
function hiddenCombination(colorsList, hiddenCombinationLength) {
  //combination creation
  const colors = colorsList.map(color => color.name);
  const randomChoice = [];
  for (let i = 0; i < hiddenCombinationLength; i++) {
    let randomOneChoice = colors[Math.floor(Math.random() * colors.length)];
    randomChoice.push(randomOneChoice);
  }
  //hidden combination row display without colors info for prevent cheating
  let hiddenCombinationHTML = randomChoice.map(() => `
        <button class="colors place1" id="black"></button>
        `).join('');
  document.getElementById('hiddenCombination').innerHTML = hiddenCombinationHTML;
}

//function for generating and displaying currentAttempt row
function currentAttemptDisp(currentAttempt, hiddenCombinationLength) {
  let currentAttemptArray = [];
  let currentAttemptTextHTML = '<div class="currentText" id="black">Combinaison en cours</div>';
  for (let i = 1; i <= hiddenCombinationLength; i++) {
    currentAttemptArray.push(i);
  }
  let currentAttemptColorsHTML = currentAttemptArray.map(value => `
    <button class="colors" id="white"></button>
    `).join('');
  let currentAttemptHTML = currentAttemptTextHTML.concat(currentAttemptColorsHTML);
  document.getElementById('currentAttempt').innerHTML = currentAttemptHTML;
}
/******/ })()
;
//# sourceMappingURL=display.bundle.js.map