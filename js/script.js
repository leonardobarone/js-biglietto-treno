// chiedi numero km da percorrere
var chilometriDaPercorrere = prompt('Quanti chilometri deve percorrere il passeggero?');
// chiedi età passeggero
var anniPasseggero = prompt('Quanti anni ha il passeggero?');
// CALCOLA PREZZO DEL BIGLIETTO
// ogni km costa 0.21 €
var prezzo = chilometriDaPercorrere * 0.21;
// sconto del 20% per i <= 18
if (anniPasseggero <= 18) {
    prezzo = prezzo * 20 / 100
} 
// sconto del 40% per gli >= 65.
else if (anniPasseggero >= 65) {
    prezzo = prezzo * 40 / 100
}
console.log(prezzo);
// Mostra risultato con solo due decimali
