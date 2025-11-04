/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function iniziali(names, lettera) {
//     let primaLetteraUguale = ""
//     let arrayInizialiUguali = []
//     for (let i = 0; i < names.length; i++) {
//         primaLetteraUguale = names[i].charAt(0)
//         if (primaLetteraUguale === lettera) {
//             arrayInizialiUguali.push(names[i])
//         }
//     }
//     return arrayInizialiUguali;
// }

// Invoca la funzione qui e stampa il risultato in console
// console.log(iniziali(names, "A"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

const iniziali = (names, lettera) => {
    return names
        .map(name => name.charAt(0))
        .filter(iniziale => iniziale === lettera)
}
console.log(iniziali(names, "A"))