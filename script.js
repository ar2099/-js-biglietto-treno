// const costoKilometro = 0.21;

// let eta = prompt("Inserisci l'età");

// let costoBiglietto = 5 * costoKilometro;

// console.log( costoBiglietto)

let costoKm = 0.21;

let eta = prompt("inserisci l'età");

let km = prompt("Quanti km devi percorrere?");

km = Number(km)

eta = Number(eta)

let variabileEta;

if (eta < 18) {
    variabileEta = 0.8;

} else if (eta >= 65) {
    variabileEta = 0.6;

} else {
    variabileEta = 1;
}

let costoBiglietto = costoKm * km * variabileEta;

console.log(costoBiglietto)

// parte grafica 

document.getElementById("vEta").innerHTML= ` ${eta} ${" anni."} `;
document.getElementById("vKm").innerHTML = ` ${km} ${" chilometri."} `;
document.getElementById("vBiglietto").innerHTML = ` ${costoBiglietto} ${"€."} `;






