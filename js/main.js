/* Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
nome e cognome
km da percorrere
eta (input testuale o number)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)
Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi
BONUS
la sezione del biglietto generato, all’avvio dovrebbe essere nascosta e comparire solo quando si preme il pulsante genera
Questo compare solo se i dati inseriti sono validi
per l’età inserire una select con 3 voci:
minorenne
maggiorenne
over 65
In base alla voce scelta dall’utente, fare i dovuti calcoli
N.B.
il responsive è opzionale!!!! */


const inputName = document.querySelector("[name='nomeUtente']");
const inputKm = document.querySelector("[name='kmUtente']");
const inputEta = document.querySelector("[name='etaUtente']");

const submitButton = document.getElementById("bottoneSubmit");
const cancelButton = document.getElementById("bottoneCancel");

submitButton.addEventListener("click", function() {
    const numeroKm = parseInt(inputKm.value);
    
    if (isNaN(numeroKm)) {
        alert("Inserisci un valore numerico per i Km da percorrere!");
    } else if (numeroKm >= 1000) {
        alert("Non esistono tratte così lunghe!");
    } else if (numeroKm <= 25) {
        alert("Non esistono tratte così brevi!");
    } else {
        let fattoreSconto = 1;
        let nomeOfferta = "Biglietto Standard";
        if (inputEta.value === "minorenne") {
            fattoreSconto = 0.8;
            nomeOfferta = "Ridotto Minorenni";
        } else if (inputEta.value === "over65") {
            fattoreSconto = 0.6;
            nomeOfferta = "Ridotto Over 65";
        }

        document.getElementById("bigliettoComparsa").classList.remove("d-none");

        document.getElementById("nomeUtente").innerHTML = inputName.value;
        document.getElementById("tipologiaBiglietto").innerHTML = nomeOfferta;
        document.getElementById("numeroCarrozza").innerHTML = (Math.floor(Math.random() * (10 - 1) + 1)).toString();
        document.getElementById("codiceCP").innerHTML = (Math.floor(Math.random() * (100000 - 10000) + 10000)).toString();
        document.getElementById("costoBiglietto").innerHTML = (numeroKm * 0.21 *fattoreSconto).toString();
        console.log(inputName.value, inputKm.value, inputEta.value);
    }
});

cancelButton.addEventListener("click", function() {
    inputName.value = "";
    inputKm.value = "";

    document.getElementById("bigliettoComparsa").classList.add("d-none");
});