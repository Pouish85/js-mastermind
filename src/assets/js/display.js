//function for generating and displaying colors buttons
export function colorsButtonCreation(colorsList) {
    let colorsButtonHTML = colorsList.map(color =>
        `
        <button class="colors" id="${color.name}"></button>
        `).join('');
        document.getElementById('colorBtn').innerHTML = colorsButtonHTML;
}

//function for generating and displaying all the attempts rows
export function attemptsRowsCreation(maxTries, currentAttempt) {
    let i;
    let arrayTries = [];
    for(i = currentAttempt; i <= maxTries; i++) {
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

//function for gererating and displaying random combination row
export function hiddenCombination(colorsList, hiddenComnationLength) {
    //combination creation
    const colors = colorsList.map(color => color.name);
    const randomChoice = [];
    for (let i = 0; i < hiddenComnationLength; i++) {
        let randomOneChoice = colors[Math.floor(Math.random() * colors.length)];
        randomChoice.push(randomOneChoice);
    }
    //hidden combination row display without colors info for prevent cheating
    let hiddenCombinationHTML = randomChoice.map(() =>
        `
        <button class="colors place1" id="black"></button>
        `).join('');
        document.getElementById('hiddenCombination').innerHTML = hiddenCombinationHTML;
} 

//function for generating and displaying currentAttempt row
export function currentAttemptDisp(currentAttempt, hiddenComnationLength) {
    let currentAttemptArray = [];
    let currentAttemptTextHTML = '<div class="currentText" id="black">Combinaison en cours</div>'
    for (let i = 1; i <= hiddenComnationLength; i++) {
        currentAttemptArray.push(i);
    }
    let currentAttemptColorsHTML = currentAttemptArray.map(value =>`
    <button class="colors ${value}" id="white"></button>
    `).join('');
    let currentAttemptHTML= currentAttemptTextHTML.concat(currentAttemptColorsHTML);
    document.getElementById('currentAttempt').innerHTML = currentAttemptHTML;
}