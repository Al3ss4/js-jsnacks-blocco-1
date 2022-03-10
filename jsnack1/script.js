console.log('JS OK!')

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// creazione array invitati

var listaInvitati = ['luca', 'giovanni', 'paolo', 'michele', 'luigi', 'mario', 'alessandro', 'francesco', 'ivan', 'mattia'];

 // richiesta nome partecipante 
var nomePartecipante = prompt('Qual è il suo nome?').toLocaleLowerCase();


// comunicazione all'invitato
var comunicazione = 'L\'invitato' + ' ' + nomePartecipante + ' ' + 'non è presente nella lista';

// controlla che sia nella lista di chi può accedere

for(var i = 0; i < listaInvitati.length; i++){
    if (nomePartecipante == listaInvitati[i]){
// stampa messaggio di benvenuto 
        comunicazione = 'L\'invitato' + ' ' + nomePartecipante + ' ' + 'è presente nella lista';
    }
}

console.log(comunicazione);