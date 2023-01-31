/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/display.js":
/*!**********************************!*\
  !*** ./src/assets/js/display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardCreation": () => (/* binding */ boardCreation)
/* harmony export */ });
function boardCreation(colorsList, maxTries, currentAttempt, hiddenCombinationLength) {
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
                        <button class="resultsColors one" id="transparent"></button>
                        <button class="resultsColors two" id="transparent"></button>
                        <button class="resultsColors three" id="transparent"></button>
                        <button class="resultsColors four" id="transparent"></button>
                    </div>
                </div>
            
            `).join('');
    document.getElementById("attemptsContainer").innerHTML = attemptsRowHTML;
  }

  //function for displaying random combination row without colors info for prevent cheating
  function hiddenCombinationRow(hiddenCombinationLength) {
    let hiddenCombinationArray = [];
    for (let i = 1; i <= hiddenCombinationLength; i++) {
      hiddenCombinationArray.push(i);
    }
    let hiddenCombinationHTML = hiddenCombinationArray.map(idx => `
            <button class="colors place${idx}" id="black"></button>
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
  colorsButtonCreation(colorsList);
  attemptsRowsCreation(maxTries, currentAttempt);
  hiddenCombinationRow(hiddenCombinationLength);
  currentAttemptDisp(currentAttempt, hiddenCombinationLength);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.row {\n  margin-bottom: 10px;\n  padding-top: 8px;\n  border-top: 1px solid white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.colors {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 15px;\n}\n\n#yellow {\n  background-color: yellow;\n}\n\n#blue {\n  background-color: blue;\n}\n\n#red {\n  background-color: red;\n}\n\n#green {\n  background-color: green;\n}\n\n#orange {\n  background-color: orangered;\n}\n\n#purple {\n  background-color: purple;\n}\n\n#white {\n  background-color: white;\n}\n\n#black {\n  background-color: black;\n  color: white;\n}\n\n#transparent {\n  background-color: transparent;\n}\n\n.gameContainer {\n  width: 500px;\n  height: 1270px;\n  border: 1px solid black;\n  background-color: #a45729;\n  border-radius: 10px;\n  border-bottom: 3px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.gameContainer h1 {\n  font-size: 70px;\n  margin-bottom: 25px;\n}\n.gameContainer #hiddenCombination {\n  margin-bottom: 15px;\n}\n.gameContainer #hiddenCombination .colors {\n  width: 70px;\n  height: 70px;\n  transform: translateX(15px);\n}\n.gameContainer .status {\n  font-size: 20px;\n  margin-bottom: 15px;\n}\n.gameContainer #attemptsContainer {\n  transform: translateX(25px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.gameContainer #attemptsContainer .number {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 15px;\n  transform: translateX(-30px);\n}\n.gameContainer #attemptsContainer .square {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n.gameContainer #attemptsContainer .square .resultsColors {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n}\n.gameContainer #currentAttempt {\n  transform: translateX(-28px);\n  text-align: center;\n}\n.gameContainer #currentAttempt .currentText {\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  margin-right: 15px;\n}\n.gameContainer #colorBtn {\n  margin-top: 25px;\n  transform: translateX(10px);\n}\n.gameContainer #colorBtn .colors {\n  width: 60px;\n  height: 60px;\n}\n.gameContainer .btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.gameContainer .btn #cancelBtn, .gameContainer .btn #submitBtn {\n  width: 100px;\n  height: 25px;\n  margin-top: 25px;\n  border: none;\n  border-radius: 10px;\n  border-bottom: 1 px solid black;\n  border-top: 1px solid white;\n}\n.gameContainer .btn #cancelBtn {\n  margin-right: 10px;\n}\n.gameContainer .btn #submitBtn {\n  margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/index.scss","webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/_mixins.scss","webpack://./src/assets/styles/_classes.scss","webpack://./src/assets/styles/_variables.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;ACCJ;;ACDA;ECDI,aAAA;EACA,mBAFoB;EAGpB,uBAHmC;EAInC,mBAJmD;AFUvD;;ACFA;EAEI,mBAAA;EACA,gBAAA;EACA,2BAAA;ECXA,aAAA;EACA,mBAFoB;EAGpB,8BDWwB;ECVxB,mBAJmD;AFoBvD;;ACFA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ADKJ;;ACFA;EACI,wBAAA;ADKJ;;ACFA;EACI,sBAAA;ADKJ;;ACFA;EACI,qBAAA;ADKJ;;ACFA;EACI,uBAAA;ADKJ;;ACFA;EACI,2BAAA;ADKJ;;ACFA;EACI,wBAAA;ADKJ;;ACFA;EACI,uBAAA;ADKJ;;ACFA;EACI,uBAAA;EACA,YAAA;ADKJ;;ACFA;EACI,6BAAA;ADKJ;;AGhEA;EACI,YAAA;EACA,cAAA;EACA,uBAAA;EACA,yBCHW;EDIX,mBAAA;EACA,8BAAA;EDLA,aAAA;EACA,sBCMc;EDLd,uBAHmC;EAInC,mBAJmD;AF6EvD;AGnEI;EACI,eAAA;EACA,mBAAA;AHqER;AGlEI;EACI,mBAAA;AHoER;AGlEQ;EACI,WAAA;EACA,YAAA;EACA,2BAAA;AHoEZ;AGhEI;EACI,eAAA;EACA,mBAAA;AHkER;AG/DI;EAEI,2BAAA;ED/BJ,aAAA;EACA,sBCgCkB;ED/BlB,uBAHmC;EAInC,mBAJmD;AFoGvD;AGhEQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,4BAAA;AHkEZ;AG/DQ;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;AHiEZ;AG/DY;EACI,YAAA;EACA,WAAA;EACA,kBAAA;AHiEhB;AG3DI;EACI,4BAAA;EACA,kBAAA;AH6DR;AG3DQ;EACI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AH6DZ;AGxDI;EACI,gBAAA;EACA,2BAAA;AH0DR;AGxDQ;EACI,WAAA;EACA,YAAA;AH0DZ;AGtDI;EDnFA,aAAA;EACA,mBAFoB;EAGpB,uBAHmC;EAInC,mBAJmD;AFgJvD;AGzDQ;EACI,YAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,+BAAA;EACA,2BAAA;AH2DZ;AGxDQ;EACI,kBAAA;AH0DZ;AGvDQ;EACI,iBAAA;AHyDZ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}","* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.row {\n  margin-bottom: 10px;\n  padding-top: 8px;\n  border-top: 1px solid white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.colors {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 15px;\n}\n\n#yellow {\n  background-color: yellow;\n}\n\n#blue {\n  background-color: blue;\n}\n\n#red {\n  background-color: red;\n}\n\n#green {\n  background-color: green;\n}\n\n#orange {\n  background-color: orangered;\n}\n\n#purple {\n  background-color: purple;\n}\n\n#white {\n  background-color: white;\n}\n\n#black {\n  background-color: black;\n  color: white;\n}\n\n#transparent {\n  background-color: transparent;\n}\n\n.gameContainer {\n  width: 500px;\n  height: 1270px;\n  border: 1px solid black;\n  background-color: #a45729;\n  border-radius: 10px;\n  border-bottom: 3px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.gameContainer h1 {\n  font-size: 70px;\n  margin-bottom: 25px;\n}\n.gameContainer #hiddenCombination {\n  margin-bottom: 15px;\n}\n.gameContainer #hiddenCombination .colors {\n  width: 70px;\n  height: 70px;\n  transform: translateX(15px);\n}\n.gameContainer .status {\n  font-size: 20px;\n  margin-bottom: 15px;\n}\n.gameContainer #attemptsContainer {\n  transform: translateX(25px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.gameContainer #attemptsContainer .number {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 15px;\n  transform: translateX(-30px);\n}\n.gameContainer #attemptsContainer .square {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n.gameContainer #attemptsContainer .square .resultsColors {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n}\n.gameContainer #currentAttempt {\n  transform: translateX(-28px);\n  text-align: center;\n}\n.gameContainer #currentAttempt .currentText {\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  margin-right: 15px;\n}\n.gameContainer #colorBtn {\n  margin-top: 25px;\n  transform: translateX(10px);\n}\n.gameContainer #colorBtn .colors {\n  width: 60px;\n  height: 60px;\n}\n.gameContainer .btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.gameContainer .btn #cancelBtn, .gameContainer .btn #submitBtn {\n  width: 100px;\n  height: 25px;\n  margin-top: 25px;\n  border: none;\n  border-radius: 10px;\n  border-bottom: 1 px solid black;\n  border-top: 1px solid white;\n}\n.gameContainer .btn #cancelBtn {\n  margin-right: 10px;\n}\n.gameContainer .btn #submitBtn {\n  margin-left: 10px;\n}","@import './mixins';\n\nbody {\n\n    @include flex;\n\n}\n\n.row {\n    \n    margin-bottom: 10px;\n    padding-top: 8px;\n    border-top: 1px solid white;\n\n    @include flex($justify: space-between);\n\n}\n\n.colors {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 15px;\n}\n\n#yellow {\n    background-color: yellow;\n}\n\n#blue {\n    background-color: blue;\n}\n\n#red {\n    background-color: red;\n}\n\n#green {\n    background-color: green;\n}\n\n#orange {\n    background-color: orangered;\n}\n\n#purple {\n    background-color: purple;\n}\n\n#white {\n    background-color: white;\n}\n\n#black {\n    background-color: black;\n    color: white;\n}\n\n#transparent {\n    background-color: transparent;\n}\n","@mixin flex($direction: row, $justify: center, $align: center) {\n    display: flex;\n    flex-direction: $direction;\n    justify-content: $justify;\n    align-items: $align;\n}",".gameContainer {\n    width: 500px;\n    height: 1270px;\n    border: 1px solid black;\n    background-color: $board-color;\n    border-radius: 10px;\n    border-bottom: 3px solid black;\n\n    @include flex(column);\n\n    h1{\n        font-size: 70px;\n        margin-bottom: 25px;\n    }\n\n    #hiddenCombination {\n        margin-bottom: 15px;\n\n        .colors {\n            width: 70px;\n            height: 70px;\n            transform: translateX(15px);\n        }\n    }\n\n    .status {\n        font-size: 20px;\n        margin-bottom: 15px;\n    }\n\n    #attemptsContainer {\n\n        transform: translateX(25px);\n        \n        @include flex(column);\n\n        .number {\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            margin-right: 15px;\n            transform: translateX(-30px);\n        }\n\n        .square {\n            height: 50px;\n            width: 50px;\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-around;\n            margin-top: 10px;\n            \n            .resultsColors {\n                height: 18px;\n                width: 18px;\n                border-radius: 50%;\n            }\n            \n        }\n    }\n    \n    #currentAttempt {\n        transform: translateX(-28px);\n        text-align: center;\n    \n        .currentText {\n            width: 100px;\n            height: 40px;\n            border-radius: 10px;\n            margin-right: 15px;\n        \n        }\n    }\n\n    #colorBtn {\n        margin-top: 25px;\n        transform: translateX(10px);\n\n        .colors{\n            width: 60px;\n            height: 60px;\n        }\n    }\n\n    .btn {\n        @include flex;\n\n        #cancelBtn, #submitBtn {\n            width: 100px;\n            height: 25px;\n            margin-top: 25px;\n            border: none;\n            border-radius: 10px;\n            border-bottom: 1 px solid black;\n            border-top: 1px solid white;\n        }\n\n        #cancelBtn {\n            margin-right: 10px;\n        }\n\n        #submitBtn {\n            margin-left: 10px;\n        }\n    }\n\n}","\n$board-color:  #a45729;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/assets/styles/index.scss");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/assets/js/display.js");




//Array of colors that will be used for the game
const colorsList = [{
  name: "yellow"
}, {
  name: "blue"
}, {
  name: "red"
}, {
  name: "green"
}, {
  name: "orange"
}, {
  name: "purple"
}];
const maxTries = 10;
let currentAttempt = 1;
const hiddenCombinationLength = 4;
let combination = [];
const randomChoice = [];
let rightPlace = 0;
let wrongPlace = 0;

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
function combinationReveal() {
  const hiddenRow = document.getElementById("hiddenCombination");
  hiddenRow.children[0].id = randomChoice[0];
  hiddenRow.children[1].id = randomChoice[1];
  hiddenRow.children[2].id = randomChoice[2];
  hiddenRow.children[3].id = randomChoice[3];
}

//function for pushed colorsButtons be add in combination array
function attempt() {
  const btns = document.querySelectorAll('.color-btn');
  for (let btn of btns) {
    btn.addEventListener('click', function () {
      if (combination.length < hiddenCombinationLength) {
        combination.push(btn.id);
        currentAttempt(combination);
      } else {
        alert(`Vous ne pouvez pas avoir une combinaison supperieure à ${hiddenCombinationLength} couleurs!`);
      }
      console.log(combination);
    });
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
function savePreviousAttempts() {
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
    alert(`Félicitation vous avez trouvé la bonne combinaison en ${currentAttempt} tentative${currentAttempt >= 2 ? "s" : ""}`);
  } else if (currentAttempt < maxTries) {
    savePreviousAttempts();
    compare();
    alert(`Ce n'est pas la bonne combinaison, vous avez ${rightPlace >= 1 ? `${rightPlace} couleur${rightPlace >= 2 ? "s" : ""} bien placée${rightPlace >= 2 ? "s" : ""}` : ""} ${rightPlace >= 1 && wrongPlace >= 1 ? "et " : ""}${wrongPlace >= 1 ? `${wrongPlace} couleur${wrongPlace >= 2 ? "s" : ""} mal placée${wrongPlace >= 2 ? "s" : ""}` : ""}`);
    reset();
    currentAttempt += 1;
    updateTry();
  } else {
    combinationReveal();
    savePreviousAttempts();
    compare();
    alert("Désolé c'est perdu, vous n'avez pas trouvé la bonne combinaison");
  }
}

//function for updating try number
function updateTry() {
  const tryHtml = document.querySelector(".status");
  tryHtml.innerText = `Tentative ${currentAttempt} / ${maxTries}`;
}

//function that compare hiddenCombination and current for giving hints to user
function compare() {
  const checkCombination = [...combination];
  console.log(checkCombination);
  rightPlace = 0;
  wrongPlace = 0;
  for (let i = 0; i < randomChoice.length; i++) {
    if (randomChoice[i] === checkCombination[i]) {
      checkCombination.splice(i, 1, "X");
      rightPlace++;
    } else if (checkCombination.includes(randomChoice[i])) {
      wrongPlace++;
    }
  }
  const hints = [];
  for (let i = 0; i < rightPlace; i++) {
    hints.push("black");
  }
  ;
  for (let i = 0; i < wrongPlace; i++) {
    hints.push("white");
  }
  ;
  for (let i = hints.length; i < hiddenCombinationLength; i++) {
    hints.push("transparent");
  }
  const resultsHint = document.querySelector(`.results${currentAttempt}`);
  resultsHint.children[0].id = hints[0];
  resultsHint.children[1].id = hints[1];
  resultsHint.children[2].id = hints[2];
  resultsHint.children[3].id = hints[3];
}
const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener('click', () => {
  reset();
});
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', () => {
  submit();
});
hiddenCombination();
(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.boardCreation)(colorsList, maxTries, currentAttempt, hiddenCombinationLength);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map