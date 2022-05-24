//Snack3
//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

let listaNumeri = [];

let sommaNumeri = 0

for (let i = 0; i < 10; i++) {
    numeroCasuale = Math.floor(Math.random() * 100) ;
    listaNumeri.push(numeroCasuale)

    console.log(listaNumeri);
    

    if (i % 2 !== 0) {
        sommaNumeri += numeroCasuale
    }
 
}

console.log(sommaNumeri);




