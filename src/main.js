import {filterAll, sortArray} from './data.js';
import dataPotter from "./data/harrypotter/data.js";
//console.log(sortArray)
let visibleArray = [];
const filterBySpells = dataPotter.spells;
let visibleSeccion = "";

const main = document.querySelector('main');

function createCharacters(characters, cardclass) {
    characters.forEach(g => {
        //   console.log(c.name, c.species)
        const card = document.createElement('div');
        card.className = cardclass;
        const name = document.createElement('h3');
        name.textContent = g.name;
        const house = document.createElement('h4');
        house.textContent = g.house;
        const species = document.createElement('h4');
        species.textContent = g.species;
        const gender = document.createElement('h4');
        gender.textContent = g.gender;
        main.append(card);
        card.append(name, house, species, gender);

    });

}
function createSpells(spells) {
    spells.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
    })
}

function createPotions(potions) {
    console.log(createPotions)
    potions.forEach(p => {
        const card = document.createElement('div');
        card.className = "potions-card";
        const name = document.createElement('h3');
        name.textContent = p.name;
        const description = document.createElement('h4');
        description.textContent = p.description;
        card.append(name, description);
        main.append(card);
    })
}
function showCaracters() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = ""
    const characters = dataPotter.characters
    visibleArray = characters;
    visibleSeccion = "characters";
    createCharacters(characters, "caracter-card")
}
//crear en el dom el dropdown con las opciones de filtrado
function showSpells() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = ""
    const spells = dataPotter.spells
    visibleArray = spells;
    visibleSeccion = "spells";
    createSpells(spells);
}
function showPotions() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = ""
    const potions = dataPotter.potions
    visibleArray = potions;
    visibleSeccion = "potions";
    createPotions(potions, "potions-card");

}
function showfunFacts() {
    document.getElementById("btn-order1").style.display="none";
    document.getElementById("btn-order2").style.display="none";
    main.innerHTML = ""
    const funFacts = dataPotter.funFacts
    funFacts.forEach(c => {
        const card = document.createElement('div');
        card.className = "fun-Facts";
        const name = document.createElement('h3');
        name.textContent = c.type;
        const content = document.createElement('h4');
        content.textContent = c.content;
        main.append(card);
        card.append(name, content);
    });
}
function showBooks() {
    //queremos obtener elenemto por id
    document.getElementById("btn-order1").style.display="none";
    document.getElementById("btn-order2").style.display="none";
    main.innerHTML = ""
    const books = dataPotter.books
    books.forEach(c => {
        const card = document.createElement('div');
        card.className = "books-card";
        const title = document.createElement('h3');
        title.textContent = c.title;
        const releaseDay = document.createElement('h4');
        releaseDay.textContent = c.releaseDay;
        const author = document.createElement('h4');
        author.textContent = c.author;
        const description = document.createElement('h4');
        description.textContent = c.description;
        main.append(card);
        card.append(title, releaseDay, author, description);
    });
}
//funciones sub menu
function showGryffindor() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = "";
    const gryffindor = filterAll.houses(dataPotter.characters, "Gryffindor");
    visibleArray = gryffindor;
    visibleSeccion = "characters"
    createCharacters(gryffindor, "gryffindor-card");
}
function showHufflepuff() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = "";
    const hufflepuff = filterAll.houses(dataPotter.characters, "Hufflepuff");
    visibleArray = hufflepuff;
    visibleSeccion = "characters"
    createCharacters(hufflepuff, "hufflepuff-card");
}
function showRavenclaw() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = "";
    const ravenclaw = filterAll.houses(dataPotter.characters, "Ravenclaw");
    visibleArray = ravenclaw;
    visibleSeccion = "characters"
    createCharacters(ravenclaw, "ravenclaw-card");
}
function showSlytherin() {
    document.getElementById("btn-order1").style.display="inline-block";
    document.getElementById("btn-order2").style.display="inline-block";
    main.innerHTML = "";
    const slytherin = filterAll.houses(dataPotter.characters, "Slytherin");
    visibleArray = slytherin;
    visibleSeccion = "characters"
    createCharacters(slytherin, "slytherin-card");
}
//functions Spells filter
function showCharm() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Charm");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showConjuration() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Conjuration");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showHex() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Hex");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showJinx() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Jinx");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showCurse() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Curse");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showTransfiguration() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Transfiguration");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showHealingSpell() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Healing Spell");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showVanishment() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Vanishment");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showTransportation() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Transportation");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
function showDarkArts() {
    main.innerHTML = "";
    const charm = filterAll.spells(filterBySpells, "Dark Arts");
    visibleArray = charm;
    visibleSeccion = "spells";
    createSpells(charm);
}
// ordenado ascendente
function showAscendente() {
    main.innerHTML = "";
    //console.log(visibleSeccion)
    const ascendente = sortArray("ascendente", [...visibleArray])
    if (visibleSeccion == "characters") {
        createCharacters(ascendente, "caracter-card")
    } else if (visibleSeccion == "spells") {
        createSpells(ascendente, "caracter-card")
    } else if (visibleSeccion == "potions") {
        createPotions(ascendente, "caracter-card")
    } 
}

function showDescendente() {
    main.innerHTML = "";
    //console.log(visibleSeccion)
    const descendente = sortArray("descendente", [...visibleArray])
    if (visibleSeccion == "characters") {
        createCharacters(descendente, "caracter-card")
    } else if (visibleSeccion == "spells") {
        createSpells(descendente, "caracter-card")
    }else if (visibleSeccion == "potions") {
        createPotions(descendente, "caracter-card")
    }


    //console.log(descendente)

}

//console.log (sortArray ("ascendente",dataPotter.characters));
//Principals
document.getElementById("characters").addEventListener("click", showCaracters);
document.getElementById("all").addEventListener("click", showSpells);
document.getElementById("potions").addEventListener("click", showPotions);
document.getElementById("books").addEventListener("click", showBooks);
document.getElementById("funFacts").addEventListener("click", showfunFacts);

//houses
document.getElementById("Gryffindor").addEventListener("click", showGryffindor);
document.getElementById("Hufflepuff").addEventListener("click", showHufflepuff);
document.getElementById("Ravenclaw").addEventListener("click", showRavenclaw);
document.getElementById("Slytherin").addEventListener("click", showSlytherin);

//Spells
document.getElementById("charm").addEventListener("click", showCharm);
document.getElementById("conjuration").addEventListener("click", showConjuration);
document.getElementById("hex").addEventListener("click", showHex);
document.getElementById("jinx").addEventListener("click", showJinx);
document.getElementById("curse").addEventListener("click", showCurse);
document.getElementById("transfiguration").addEventListener("click", showTransfiguration);
document.getElementById("healingSpell").addEventListener("click", showHealingSpell);
document.getElementById("vanishment").addEventListener("click", showVanishment);
document.getElementById("transportation").addEventListener("click", showTransportation);
document.getElementById("darkArts").addEventListener("click", showDarkArts);


//botones ordenado alfabeticamente
document.getElementById("btn-order2").addEventListener("click", showDescendente);
document.getElementById("btn-order1").addEventListener("click", showAscendente);
