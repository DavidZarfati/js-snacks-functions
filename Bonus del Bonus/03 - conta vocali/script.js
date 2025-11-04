/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali(word) {
    let arrayVocali = []
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u") {
            arrayVocali.push(word.charAt(i))
        }
    }
    return arrayVocali
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)