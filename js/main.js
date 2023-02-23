'use strict'



const mostraBiglietto = document.querySelector('.containerBiglietto');

const buttonGenerate = document.getElementById('genera');
const bottoneAnnulla = document.getElementById('reset')
buttonGenerate.addEventListener('click',
    function () {
        // const input del form
        const nomeUtente = document.getElementById('nomeCognome');
        const numeroChilometri = document.getElementById('distanza').value;
        const etaPasseggero = document.getElementById('fasciaEta');

        // const traformazione valori
        const nomeUtenteValue = nomeUtente.value;
        const numeroChilometriValue = Number(numeroChilometri.value);
        const etaPasseggeroValue = etaPasseggero.value;
        // const numeri random 
        const numeroRandomCarrozza = Math.floor(Math.random() * 10 + 1);
        const numeroRandomCP = Math.floor(Math.random() * 99999 + 1);

        
        // let per il biglietto ridotto 
        let prezzoBigliettoRidotto;
        // calcolo per il prezzo base del biglietto 
        let prezzoBiglietto = numeroChilometri * 0.21;
        
        // if per calcolare il biglietto scontato minorenne
        if (etaPasseggeroValue === 'minorenne') {
        //    calcolo e approssimazione a due valori decimali per il biglietto ridotto minorenne 
            prezzoBigliettoRidotto = prezzoBiglietto * 0.8;
            prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
            // stampa nella console del risultato
            console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€' + ' ' + etaPasseggeroValue);
            // stampa nella tabella dei vari risulatati
            document.getElementById("segnaPasseggero").innerHTML = nomeUtenteValue;
            document.getElementById("segnaOfferta").innerHTML = etaPasseggeroValue;
            document.getElementById("segnaCarrozza").innerHTML = numeroRandomCarrozza;
            document.getElementById("segnaCodice").innerHTML = numeroRandomCP;
            document.getElementById("segnaCosto").innerHTML = prezzoBigliettoRidotto;
        }
        // else if per calcolare il biglietto scontato over 65 
        else if (etaPasseggeroValue === 'over') {
           //    calcolo e approssimazione a due valori decimali per il biglietto ridotto over 65
            prezzoBigliettoRidotto = prezzoBiglietto * 0.6;
            prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
            
            console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€' + ' ' + etaPasseggeroValue);
           // stampa nella tabella dei vari risulatati
            document.getElementById("segnaPasseggero").innerHTML = nomeUtenteValue;
            document.getElementById("segnaOfferta").innerHTML = etaPasseggeroValue;
            document.getElementById("segnaCarrozza").innerHTML = numeroRandomCarrozza;
            document.getElementById("segnaCodice").innerHTML = numeroRandomCP;
            document.getElementById("segnaCosto").innerHTML = prezzoBigliettoRidotto;
        }
        // else per il risultato del biglietto intero maggiorenne
        else {
            prezzoBiglietto = prezzoBiglietto.toFixed(2)
            
            console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBiglietto + '€' + ' ' + etaPasseggeroValue);
            // stampa nella tabella dei vari risulatati
            document.getElementById("segnaPasseggero").innerHTML = nomeUtenteValue;
            document.getElementById("segnaOfferta").innerHTML = etaPasseggeroValue;
            document.getElementById("segnaCarrozza").innerHTML = numeroRandomCarrozza;
            document.getElementById("segnaCodice").innerHTML = numeroRandomCP;
            document.getElementById("segnaCosto").innerHTML = prezzoBiglietto;
        }

        mostraBiglietto.classList.add('vediBiglietto');
        
    }


)

bottoneAnnulla.addEventListener('click',
    function(){

        mostraBiglietto.classList.remove('vediBiglietto')
    }
    
    )




