// const costoKilometro = 0.21;

// let eta = prompt("Inserisci l'età");

// let costoBiglietto = 5 * costoKilometro;

// console.log( costoBiglietto)

let costoKm = 0.21;

let eta = prompt("inserisci l'età");

let km = prompt("Quanti km devi percorrere?");

let variabileEta;

let costoBiglietto = costoKm * km * variabileEta;

console.log(costoBiglietto)

if (eta < 18) {
    variabileEta = 0.8;
}

if (eta >= 65) {
    variabileEta = 0.6;
}

if ((eta >= 18) && (eta < 65)) {
    variabileEta = 1;
}
