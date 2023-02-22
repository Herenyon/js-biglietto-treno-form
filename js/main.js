const numeroChilometri = parseInt(document.getElementById('distanza').value);
const etaPasseggero = parseInt(document.getElementById('fasciaEta')) ;


let prezzoBigliettoRidotto;
let prezzoBiglietto = numeroChilometri * 0.21;
// console.log(numeroChilometri);

const generaPrezzo = document.getElementById('genera');






    





if (etaPasseggero === 'minorenne') {
    prezzoBigliettoRidotto = prezzoBiglietto * 0.8;
    prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
    console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€');
    // document.getElementById("prezzoFinale").innerHTML = prezzoBigliettoRidotto + ' ' + '€';
}
else if (etaPasseggero === 'over') {
    prezzoBigliettoRidotto = prezzoBiglietto * 0.6;
    prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
    console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€');
    // document.getElementById("prezzoFinale").innerHTML = prezzoBigliettoRidotto + ' ' + '€';
}

else {
    prezzoBiglietto = prezzoBiglietto.toFixed(2)
    console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBiglietto + '€');
    // document.getElementById("prezzoFinale").innerHTML = prezzoBiglietto + ' ' + '€';
}