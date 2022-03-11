console.log('JS OK!')

// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. 

//chiedi un numero di 4 cifre
var numero = parseInt( prompt('Inserisci un numero di 4 cifre!'));


//calcola la somma di tutte le cifre che compongono il numero. 
somma = 0;

while (numero) {
    somma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log(somma);


//correzione


let numeroUtente;
while(isNaN(parseInt(numeroUtente)) || numeroUtente.length !== 4 ){
    numeroUtente = prompt('Inserisci numero di 4 cifre');
}

let sommaCifre = 0;
for(let i=0; i < numeroUtente.length; i++){
    sommaCifre += parseInt(numeroUtente[i]);
}

console.log(` La somma delle cifre del numero ${numeroUtente} è: ${sommaCifre}`);