console.log('JS OK!')

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

//array vuoto

array=[]

//Chiedi per 6 volte all’utente di inserire un numero

for(var i=0 ; i<6 ; i++){
    numero= parseInt(prompt('inserisci un numero'));
    console.log(numero);

//se è dispari inseriscilo nell’array
    if( numero % 2 ==! 0){
        array.push(numero)
    }
}