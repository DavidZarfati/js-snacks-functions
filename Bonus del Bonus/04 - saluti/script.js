/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(nome) {
    messaggio = "Ciao " + nome;
    return messaggio
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto("David"))
console.log(saluto("Mario"))


//Risultato atteso se si passa 'Mario': // ciao Mario
// io ho sono Narcisista ed ho passato David :)