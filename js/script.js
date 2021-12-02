/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.*/

// seleziono pulsante play
let play = document.querySelector('button');
// eventi quando ci clicco sopra
play.addEventListener('click', function () {
    // selezione elementi dal dom
    let level = document.querySelector('select');
    let active = document.querySelector('.hidden');
    let grid = document.querySelector('.grid');
    // dichiaro righe e colonne
    let row = 0;
    let col = 0;
    
    // definisco i livelli di difficoltà
    switch (level.value) {
        case 'easy':
            grid.innerHTML = '';
            active.classList.remove('hidden');
            active.classList.add('active');
            row = 10;
            col = 10;
            createSquare(row, col);
            bomb = getRndInt(1, 100);
            break;
            case 'medium':
                grid.innerHTML = '';
                active.classList.remove('hidden');
                active.classList.add('active');
                row = 9;
                col = 9;
                createSquare(row, col);
                bomb = getRndInt(1, 100);
                break;
                case 'hard':
                    grid.innerHTML = '';
                active.classList.remove('hidden');
                active.classList.add('active');
                row = 7;
                col = 7;
                createSquare(row, col);
                bomb = getRndInt(1, 100);
                break;
    }
})
        
 // genero funzione per creare gli square
function createSquare(row, col) {
    // grandezza griglia in base agli square
    let numberSquare = row * col;
    
    // genero square
    for (let i = 0; i < numberSquare; i++) {
        // seleziono griglia dal dom
        let grid = document.querySelector('.grid');
        // creo div per inserire gli square
        let square = document.createElement('div');
        // aggiungo classe e creo dimensioni square
        square.classList.add('square');
        square.style.width = `calc(${col})`;
        square.style.height = `calc(${row})`;
        // inserisco square nella griglia
        let numbers = i + 1;
        square.append(numbers);
        grid.append('square');
        
        // quando clicco sullo square, diventa blu
        square.addEventListener('click', function () {
            this.style.backgroundColor = 'blue';
        })
    }
}

// genero numeri random nell'array "bomb"
function getRndInt(min, max) {
    // creo array vuoto
    let bomb = [];
    
    // inserisco numeri nell'array senza duplicati
    for (let i = 0; i < 16; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        
        // min e max sono inclusivi
        let element = bomb[i];
        element = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // controllo unicità numeri nell'array
        while (bomb.includes(element)) {
            element = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        bomb.push(element);
        }
        return bomb
    }