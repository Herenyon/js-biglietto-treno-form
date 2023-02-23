'use strict'





const buttonGenerate = document.getElementById('genera');

buttonGenerate.addEventListener('click',
    function () {
        const nomeUtente = document.getElementById('nomeCognome');
        const numeroChilometri = document.getElementById('distanza').value;
        const etaPasseggero = document.getElementById('fasciaEta');

        const nomeUtenteValue = nomeUtente.value;
        const numeroChilometriValue = Number(numeroChilometri.value);
        const etaPasseggeroValue = etaPasseggero.value;
        let prezzoBigliettoRidotto;
        let prezzoBiglietto = numeroChilometri * 0.21;


        if (etaPasseggeroValue === 'minorenne') {
            prezzoBigliettoRidotto = prezzoBiglietto * 0.8;
            prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
            console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€' + ' ' + etaPasseggeroValue);
            // document.getElementById("prezzoFinale").innerHTML = prezzoBigliettoRidotto + ' ' + '€';
        }
        else if (etaPasseggeroValue === 'over') {
            prezzoBigliettoRidotto = prezzoBiglietto * 0.6;
            prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
            console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€' + ' ' + etaPasseggeroValue);
            // document.getElementById("prezzoFinale").innerHTML = prezzoBigliettoRidotto + ' ' + '€';
        }

        else {
            prezzoBiglietto = prezzoBiglietto.toFixed(2)
            console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBiglietto + '€' + ' ' + etaPasseggeroValue);
            // document.getElementById("prezzoFinale").innerHTML = prezzoBiglietto + ' ' + '€';
        }

    }


)





