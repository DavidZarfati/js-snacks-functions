/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(name, ora) {
    let messaggio = ""
    if (ora >= 0 && ora <= 13) {
        messaggio = "Buongiorno " + name + "🌅"
    }
    else if (ora >= 13 && ora <= 17) {
        messaggio = "Buon pomeriggio " + name + " è ora di pranzo" + "🍣"
    }
    else if (ora >= 17 && ora <= 24) {
        messaggio = "Buonasera " + name + " 🌆"
    }
    else { messaggio = "Non hai inserito un orario corretto 🙅🏻" }
    return messaggio
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto("Mario", 12))
console.log(saluto("Mario", 15))
console.log(saluto("Mario", 18))
console.log(saluto("Mario", 37))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


// e se fosse Natale?
console.log(`hey Loris non è natale🎅🏻, ma...🎃 Buone feste, è un piacere averti qui,🦈 goditi questo albero🎄`)
// let alberoUtente = prompt("dimmi un numero da a 10")
// function alberoDiNatale(altezza) {

//     for (let i = 1; i <= altezza; i++) {
//         let spazi = "  ".repeat(altezza - i);
//         let stelle = "🎄".repeat(i * 2 - 1);
//         console.log(spazi + stelle);
//     }

//     let troncoSpazi = " ".repeat(altezza - 1);
//     console.log(troncoSpazi + "       |    ");
// }


// alberoDiNatale(alberoUtente);
// console.log(`Hai scelto di avere un albero alto ${alberoUtente}`)

function creaAlberoDiNatale() {
    const altezza = prompt("Quanto alto vuoi l'albero di Natale? (numero intero)");
    const h = parseInt(altezza);

    if (isNaN(h) || h <= 0) {
        console.log("Inserisci un numero valido maggiore di 0.");
        return;
    }

    console.log("Versione con asterischi");

    // Versione con asterischi ( si allinea facile)
    for (let i = 1; i <= h; i++) {
        const numStelle = i * 2 - 1;
        const spazi = " ".repeat(h - i); // Spazi a sinistra per centrare
        const stelle = "*".repeat(numStelle);
        console.log(spazi + stelle);
    }

    // Tronco centrato
    const spaziTronco = " ".repeat(h - 1);
    console.log(spaziTronco + "|");

    console.log(" Versione con emoji 🎄");


    for (let i = 1; i <= h; i++) {
        const numEmoji = i * 2 - 1;

        const spazi = " ".repeat((h - i) * 2.5);
        const alberi = "🎄".repeat(numEmoji);
        console.log(spazi + alberi);
    }


    const spaziRegalo = " ".repeat((h - 1) * 2.5);
    console.log(spaziRegalo + "🎁");
}


creaAlberoDiNatale();