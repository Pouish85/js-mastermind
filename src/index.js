import './assets/styles/index.scss';

//Array of colors that will be used for the game
const colorsList = [ {name: "yellow"}, {name: "blue"}, {name: "red"}, {name: "green"}, {name: "orange"}, {name: "purple"}];

const maxTries = 10;
let currentAttempt = 1;



//function for ganerating colors button
function colorsButtonCreation() {
    let colorsButtonHTML = colorsList.map(color =>
        `
        <button class="colors" id="${color.name}"></button>
        
        `).join('');
        document.getElementById('colorBtn').innerHTML = colorsButtonHTML;
}

//function for generating all the attempts rows
function attemptsRowsCreation() {
    let i;
    let arrayTries = [];
    for(i = currentAttempt; i <=maxTries; i++) {
        arrayTries.push(i)
    }

    let attemptsRowHTML = arrayTries.map(value =>
        `
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



colorsButtonCreation();
attemptsRowsCreation();