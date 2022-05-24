//Snack1
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// dichiaro variabile numeroInserito
let numeroInserito = parseInt(prompt("inserisci un numero"))

// controllo se numero inserito è pari allora stampo il numeroinserito, se non è pari stampo numero successivo
if (numeroInserito % 2 == 0) {
    console.log(numeroInserito)
}else{
    console.log(numeroInserito + 1)
}
