console.log('JS OK');

//inserire una parola
const parola = prompt('inserire una parola per la verifica.');

//evocazione della funzione
palindromo (parola);

//funzione
function palindromo() {
    let alorap = '';
    for (let i = parola.length - 1 ; i >= 0; i--) {
        alorap = alorap + parola[i]
    }
    if (parola === alorap) {
        console.log(`la parola ${parola} è palindroma`);
    } else {
        console.log(`la parola ${parola} non è palindroma`);
    }
}