// /* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// // Dichiara la funzione qui.
// function iniziali(names) {
//     let arrayIniziali = []
//     for (let i = 0; i < names.length; i++) {
//         // primaLettera = names[i].charAt(0)
//         // arrayIniziali.push(primaLettera)
//         arrayIniziali.push(names[i].charAt(0))
//     }
//     return arrayIniziali;
// }

// // Invoca la funzione qui e stampa il risultato in console
// console.log(iniziali(names))


// //Risultato atteso: ["A", "L", "M", "A", "G", "A"]
// Map è un metodo che serve per creare un array trasformando ogni elemento dell'array originale secondo la funxione specificata
const iniziali = (names) => {
    return names.map(name => name.charAt(0))
}
console.log(iniziali(names))