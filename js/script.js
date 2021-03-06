/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.*/


// Dichiaro gli eventi del pulsante
let play = document.querySelector('button');
play.addEventListener('click', function () {
    let level = document.querySelector("select");
    let active = document.querySelector(".hidden");
    let container = document.querySelector(".grid");
    let row;
    let col;
    //  Eventi in base alla scelta del livello
    switch (level.value) {
        case 'easy':
            container.innerHTML = "";
            active.classList.add("active");
            row = 10;
            col = 10;
            range = 101;
            createSquare(row, col);
            break;
        case 'medium':
            container.innerHTML = "";
            active.classList.add("active");
            row = 9;
            col = 9;
            range = 82;
            createSquare(row, col);
            break;
        case 'hard':
            container.innerHTML = "";
            active.classList.add("active");
            row = 7;
            col = 7;
            range = 50;
            createSquare(row, col);
            break;
    }
    // Funzione per griglie, generazione array e clic
    function createSquare(row, col) {
        let container = document.querySelector(".grid");
        let numberSquare = row * col;
        // Creo un array per generare le "bombe"
        let bombNumber = [];
        while (bombNumber.length < 16) {
            let number = Math.floor(Math.random() * range);
            if (bombNumber.indexOf(number) === -1) bombNumber.push(number);
        }
        console.log(bombNumber);
        // Creo la griglia
        for (let i = 0; i < numberSquare; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            let numbers = i + 1;
            square.append(numbers);
            container.append(square);

            // Aggiungere BG al clic
            square.addEventListener('click', function () {
                if (bombNumber.includes(i + 1)) {
                    for (let index = 0; index < range; index++) {
                        let allBomb = document.querySelectorAll('.square');
                        if (bombNumber.includes(index + 1)) {
                            allBomb[index].classList.add('bg-bomb');
                        }
                    }
                    let message = document.createElement('div');
                    message.innerHTML = `Hai Perso. Ritenta`;
                    message.classList.add('text');
                    container.append(message);
                } else {
                    this.classList.add('bg-active');
                }
            })
        }
    }
})
