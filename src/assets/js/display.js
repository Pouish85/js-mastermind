
export function boardCreation (colorsList, maxTries, currentAttempt, hiddenCombinationLength) {
    // //function for generating and displaying colors buttons
    function colorsButtonCreation(colorsList) {
        let colorsButtonHTML = colorsList.map(color =>
            `
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

    //function for displaying random combination row without colors info for prevent cheating
    function hiddenCombinationRow(hiddenCombinationLength) {
        
        let hiddenCombinationArray = [];
        for (let i = 1; i <= hiddenCombinationLength; i++) {
            hiddenCombinationArray.push(i);
        }
        let hiddenCombinationHTML = hiddenCombinationArray.map(idx =>
            `
            <button class="colors place${idx}" id="black"></button>
            `).join('');
            document.getElementById('hiddenCombination').innerHTML = hiddenCombinationHTML;
    } 

    //function for generating and displaying currentAttempt row
    function currentAttemptDisp(currentAttempt, hiddenCombinationLength) {
        let currentAttemptArray = [];
        let currentAttemptTextHTML = '<div class="currentText" id="black">Combinaison en cours</div>'
        for (let i = 1; i <= hiddenCombinationLength; i++) {
            currentAttemptArray.push(i);
        }
        let currentAttemptColorsHTML = currentAttemptArray.map(value =>`
        <button class="colors" id="white"></button>
        `).join('');
        let currentAttemptHTML= currentAttemptTextHTML.concat(currentAttemptColorsHTML);
        document.getElementById('currentAttempt').innerHTML = currentAttemptHTML;
    }
    colorsButtonCreation(colorsList);
    attemptsRowsCreation(maxTries, currentAttempt);
    hiddenCombinationRow(colorsList, hiddenCombinationLength);
    currentAttemptDisp(currentAttempt, hiddenCombinationLength);
}