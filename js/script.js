/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.*/

// devo generare 16 numeri casuali senza farli duplicarre
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let numberRand = getRndInt(min, max);
let bomb = [];
while (numberRand) {
    
}
// devo inserirli in ogni livello

// clicco: se il numero è presente diventa rosso e finisce la partita, se non è presenta diventa blu e si continua; la partita finisce anche se finiscono i numeri consentiti

// a partita terminata appare il numero di click effettuati = punteggio


let play = document.querySelector('button');
play.addEventListener('click', function () {
    let level = document.querySelector('select');
    let active = document.querySelector('.hidden');
    let grid = document.querySelector('.grid');
    let row = 0;
    let col = 0;

    switch (level.value) {
        case 'easy':
            grid.innerHTML = '';
            active.classList.remove('hidden');
            active.classList.add('active');
            row = 10;
            col = 10;
            createSquare(row, col);
            break;
        case 'medium':
            grid.innerHTML = '';
            active.classList.remove('hidden');
            active.classList.add('active');
            row = 9;
            col = 9;
            createSquare(row, col);
            break;
        case 'hard':
            grid.innerHTML = '';
            active.classList.remove('hidden');
            active.classList.add('active');
            row = 7;
            col = 7;
            createSquare(row, col);
            break;
    }
})

function createSquare(row, col) {
    let numberSquare = row * col;

    for (let i = 0; i < numberSquare; i++) {
        let grid = document.querySelector('.grid');
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(${col})`;
        square.style.height = `calc(${row})`;
        let numbers = i + 1;
        square.append(numbers);
        grid.append('square');

        square.addEventListener('click', function () {
            this.style.backgroundColor = 'blue';
        })
        
    }
}