var colorsList = [ {name: "jaune"}, {name: "bleu"}, {name: "rouge"}, {name: "vert"}, {name: "orange"}, {name: "violet"}];

let randomChoice= [];
const triesMax = 10;
let essaiEnCours = 1;
let combinaison = [];
const ecran = document.getElementById("ecran");

//fonction random pour le choix de la combinaison a trouver
function random() {
    const colors = colorsList.map(color => color.name);
    
    let randomOneChoice = colors[Math.floor(Math.random() * colors.length)];
    return randomOneChoice;
}

//fonction pour la création de la combinaison a trouver
function choix() {
    let randomChoice1 = random();
    let randomChoice2 = random();
    let randomChoice3 = random();
    let randomChoice4 = random();
    randomChoice.push(randomChoice1);
    randomChoice.push(randomChoice2);
    randomChoice.push(randomChoice3);
    randomChoice.push(randomChoice4);
    return randomChoice;
}

//generation du clavier de choix des couleurs
function colorsKeysCreation() {
    let keyboardHTML = colorsList.map(color => 
        `
        <button
        class="colors"
        id='${color.name}'
        onClick="guess('${color.name}')"
        ></button>
        `).join('');
    document.getElementById('clavier').innerHTML = keyboardHTML;  
}
    //fonction enregistrement des précédentes combinaisons
    function saveCombinaison(combinaison, essaiEnCours) {
        let tentative = document.querySelector(`.tentative${essaiEnCours}`);
        let couleurUn = tentative.querySelector('.un');
        let couleurDeux = tentative.querySelector('.deux');
        let couleurTrois = tentative.querySelector('.trois');
        let couleurQuatre = tentative.querySelector('.quatre');
        couleurUn.setAttribute("id", `${combinaison[0]}`);
        couleurDeux.setAttribute("id", `${combinaison[1]}`);
        couleurTrois.setAttribute("id", `${combinaison[2]}`);
        couleurQuatre.setAttribute("id", `${combinaison[3]}`);
    }
   
    //fonction de detection et creation de la combinaison utilisateur
    function guess(color) {
        
        if (combinaison.length < 4) {
            combinaison.push(color);
            combinaisonEnCours(combinaison);
        } else {
            ecran.innerText = "";
            ecran.innerText = "Vous avez atteint la limite de 4 éléments pour la combinaison."
            
        }
        
        //fonction d'affichage de la combinaison en cours
        function combinaisonEnCours(combinaison) {
            let combinaisonHTML = document.querySelector('#combinaisonEnCours');
            if (combinaison.length == 1) {
                let couleurUn = combinaisonHTML.querySelector('.un');
                couleurUn.setAttribute("id", `${combinaison[0]}`);
            } else if (combinaison.length == 2) {
                let couleurDeux = combinaisonHTML.querySelector('.deux');
                couleurDeux.setAttribute("id", `${combinaison[1]}`);
            } else if (combinaison.length == 3) {
                let couleurTrois = combinaisonHTML.querySelector('.trois');
                couleurTrois.setAttribute("id", `${combinaison[2]}`);
            } else if (combinaison.length == 4) {
                let couleurQuatre = combinaisonHTML.querySelector('.quatre');
                couleurQuatre.setAttribute("id", `${combinaison[3]}`);
            }
        }
    }

    //fonction pour annuler la combinaison avant validation
    function cancel() {
        combinaison = [];
        document.getElementById('combinaisonEnCours').innerHTML =      
        `
        <button class="CombiEnCours" id="noir">Combinaison en cours</button>
            <button class="colors un" id="blanc"></button>
            <button class="colors deux" id="blanc"></button>
            <button class="colors trois" id="blanc"></button>
            <button class="colors quatre" id="blanc"></button>
        `;
    }
    //fonction validation de la proposition de la combinaison
    function submit() {
        if (combinaison.toString() === randomChoice.toString()) {
            combinaisonReveal();
            ecran.innerText = "";
            ecran.innerText = `Félicitation, vous avez gagné !\nVous avez reussi en ${essaiEnCours} tentative${essaiEnCours >= 2 ? "s" : ""}`
        } else if ( essaiEnCours < triesMax ){
            saveCombinaison(combinaison, essaiEnCours);
            compare(combinaison, randomChoice, essaiEnCours);
            combinaison = [];
            razCombiEnCours();
            essaiEnCours += 1;
            updateTry(essaiEnCours);
        } else {
            combinaisonReveal();
            saveCombinaison(combinaison, essaiEnCours)
            ecran.innerText = "";
            ecran.innerText = "Désolé, vous n'avez pas réussi à trouver la bonne combinaison";
            combinaison = [];
        }
    }

    //fonction de remise a zero de la ligne de combinaison en cours
    function razCombiEnCours() {
        let combinaisonHTML = document.querySelector('#combinaisonEnCours');
        let couleurUn = combinaisonHTML.querySelector('.un');
        let couleurDeux = combinaisonHTML.querySelector('.deux');
        let couleurTrois = combinaisonHTML.querySelector('.trois');
        let couleurQuatre = combinaisonHTML.querySelector('.quatre');
        couleurUn.setAttribute("id", "blanc");
        couleurDeux.setAttribute("id", "blanc");
        couleurTrois.setAttribute("id", "blanc");
        couleurQuatre.setAttribute("id", "blanc");
    }

    //fonction pour changement de la valeur de essaiEnCours
    function updateTry (essaiEnCours) {
        tryHTML = document.querySelector('#etat');
        tryHTML.innerText = "";
        tryHTML.innerText = `Tentative ${essaiEnCours} / ${triesMax}`;
    }

//fonction d'affichage de la combinaison a trouver pour la fin de partie
function combinaisonReveal() {
    let emplacementUn = document.querySelector(".empla1");
    let emplacementDeux = document.querySelector(".empla2");
    let emplacementTrois = document.querySelector(".empla3");
    let emplacementQuatre = document.querySelector(".empla4");
    emplacementUn.setAttribute('id', randomChoice[0] );
    emplacementDeux.setAttribute('id', randomChoice[1] );
    emplacementTrois.setAttribute('id', randomChoice[2] );
    emplacementQuatre.setAttribute('id', randomChoice[3] );
}

//fonction de comparaison entre les arrays
function compare(combinaison, randomChoice, essaiEnCours) {
    const checkCombi = [...combinaison]
    let bienPlace = 0;
    let malPlace = 0;

    for (let i = 0; i < randomChoice.length; i++) {
        if (randomChoice[i] === checkCombi[i]) {
            checkCombi.splice(i, 1, 'X');
            bienPlace++;
        } else if (checkCombi.includes(randomChoice[i])) {
            malPlace++;
        }
    }

    //changement des couleurs des indicateurs de bonnes réponses
    let resultSpace = document.querySelector(`.resultat${essaiEnCours}`);
    let spaceOne = resultSpace.querySelector('.un');
    let spaceTwo = resultSpace.querySelector('.deux');
    let spaceThree = resultSpace.querySelector('.trois');
    let spaceFour = resultSpace.querySelector('.quatre');

    if (malPlace == 1 && bienPlace ==0) {
        spaceOne.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez un élément de la bonne couleur mais mal placé";
    } else if (malPlace == 2 && bienPlace ==0) {
        spaceOne.setAttribute('id', 'blanc');
        spaceTwo.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez deux éléments de la bonne couleur mais mal placés";
    } else if (malPlace == 3 && bienPlace ==0) {
        spaceOne.setAttribute('id', 'blanc');
        spaceTwo.setAttribute('id', 'blanc');
        spaceThree.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez trois éléments de la bonne couleur mais mal placés";
    } else if (malPlace == 4 && bienPlace ==0) {
        spaceOne.setAttribute('id', 'blanc');
        spaceTwo.setAttribute('id', 'blanc');
        spaceThree.setAttribute('id', 'blanc');
        spaceFour.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez quatre éléments de la bonne couleur mais mal placés";
    } else if (malPlace == 0 && bienPlace ==1) {
        spaceOne.setAttribute('id', 'noir');
        ecran.innerText = "";
        ecran.innerText = "Vous avez un élément de la bonne couleur bien placé"
    } else if (malPlace == 0 && bienPlace ==2) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'noir');
        ecran.innerText = "";
        ecran.innerText = "Vous avez deux éléments de la bonne couleur bien placés"
    } else if (malPlace == 0 && bienPlace ==3) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'noir');
        spaceThree.setAttribute('id', 'noir');
        ecran.innerText = "";
        ecran.innerText = "Vous avez trois éléments de la bonne couleur bien placés"
    } else if (malPlace == 1 && bienPlace ==1) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez un élément de la bonne couleur bien placé et un élément de la bonne couleur mais mal placé"
    } else if (malPlace == 2 && bienPlace ==1) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'blanc');
        spaceThree.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez un élément de la bonne couleur bien placé et deux éléments de la bonne couleur mais mal placés"
    } else if (malPlace == 3 && bienPlace ==1) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'blanc');
        spaceThree.setAttribute('id', 'blanc');
        spaceFour.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez un élément de la bonne couleur bien placé et trois éléments de la bonne couleur mais mal placés"
    } else if (malPlace == 1 && bienPlace ==2) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'noir');
        spaceThree.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez deux éléments de la bonne couleur bien placés et un élément de la bonne couleur mais mal placé"
    } else if (malPlace == 2 && bienPlace ==2) {
        spaceOne.setAttribute('id', 'noir');
        spaceTwo.setAttribute('id', 'noir');
        spaceThree.setAttribute('id', 'blanc');
        spaceFour.setAttribute('id', 'blanc');
        ecran.innerText = "";
        ecran.innerText = "Vous avez deux éléments de la bonne couleur bien placés et deux éléments de la bonne couleur mais mal placés"
    } 
}

choix();
colorsKeysCreation();