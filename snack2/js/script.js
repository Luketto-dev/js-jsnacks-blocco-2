//Snack2
//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
//e da queste vuole generare una falsa lista di invitati con nome e cognome.

// creo array nomi
let listaNomi = ["luca", "Ludovica", "Rita", "Paolo", "Giovanni", "Jacopo"];
//creo array cognomi
let listaCognomi = ["Rossi","Blasi","Colonna","Scaccia","Giusti","Pellegrino"]

//dichiaro array vuoto che andrò a popolare con nome e cognome random
listaNomiCognomi = [];

for (let i = 0; i< 6; i++) {
    
    // creo numero random per i nomi
    let numeroCasualeNomi = Math.floor(Math.random() * 6) ;
    //creo numero random peri cognomi
    let numeroCasualeCognomi = Math.floor(Math.random() * 6) ;

    // nome è uguale all elemento che si trova all indice del numerocasualenomi
    let nome = listaNomi[numeroCasualeNomi];
     // cognome è uguale all elemento che si trova all indice del numerocasualecognomi
    let cognome = listaCognomi[numeroCasualeCognomi]

    // popolo l array concatenando variabili nome + cognome 
    listaNomiCognomi.push(nome + ' ' + cognome)

}

// stampo l array popolato
console.log(listaNomiCognomi);



