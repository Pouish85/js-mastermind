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
/*!**************************************!*\
  !*** ./src/assets/js/screenBoard.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "screenBoard": () => (/* binding */ screenBoard)
/* harmony export */ });
const welcomeMessage = "Bienvenue et bonne chance!";
const rulesTitle = "Règles du jeu:";
const goalTitle = "But du jeu:";
const goal = "Vous avez dix tentative pour découvrir la combinaison secrète";
const curseTitle = "Déroulement de la partie:";
const curse = `Vous choisissez une combinaison de quatre couleurs (utiliser plusieurs fois la même couleur est autorisé), puis vous appuyez sur le bouton "valider". Le programme vous informera si vous avez réussi à déchiffrer la combinaison. Si ce n'est pas le cas, il vous donnera des indices pour y arriver lors des prochains essais. Si vous souhaitez annuler votre combinaison en cours il vous suffit d'appuyer sur le bouton "Annuler".`;
const hintTitle = "Les indices:";
const hint = "Les indices seront sous deux formes, la première, écrite sur l'écran au-dessus des règles. La seconde sous forme de pions à droite de chaque combinaison effectuées. Un pion noir vous indique que vous avez une bonne couleur bien placée, un pion blanc vous indique que vous avez une bonne couleur mais mal placée.";
function screenBoard() {
  const screenText = document.getElementById('screen');
  const rulesPanel = document.querySelector('.rulesPanel');
  screenText.innerText = welcomeMessage;
  rulesPanel.children[0].innerText = rulesTitle;
  rulesPanel.children[1].innerText = goalTitle;
  rulesPanel.children[2].innerText = goal;
  rulesPanel.children[3].innerText = curseTitle;
  rulesPanel.children[4].innerText = curse;
  rulesPanel.children[5].innerText = hintTitle;
  rulesPanel.children[6].innerText = hint;
}
/******/ })()
;
//# sourceMappingURL=screen.bundle.js.map