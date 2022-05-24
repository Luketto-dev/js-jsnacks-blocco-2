//Snack2
//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
//e da queste vuole generare una falsa lista di invitati con nome e cognome.

let listaNomi = ["luca", "Ludovica", "Rita", "Paolo", "Giovanni", "Jacopo"];
let listaCognomi = ["Rossi","Blasi","Colonna","Scaccia","Giusti","Pellegrino"]

listaNomiCognomi = [];

for (let i = 0; i< 6; i++) {
    
    let numeroCasualeNomi = Math.floor(Math.random() * 6) ;
    let numeroCasualeCognomi = Math.floor(Math.random() * 6) ;

    let nome = listaNomi[numeroCasualeNomi];
    let cognome = listaCognomi[numeroCasualeCognomi]

    listaNomiCognomi.push(nome + ' ' + cognome)

}

console.log(listaNomiCognomi);



