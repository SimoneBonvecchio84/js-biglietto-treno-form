// trovo il bottone nella pagina

const generaBtn = document.getElementById("generaBtn")

// aggiungi un evento al bottone 

generaBtn.addEventListener("click", function () {


    // aggiungi nome utente
    const nomeUtente = document.getElementById("nomeUtente"); // object | null
    const nomeValue = nomeUtente.value; // stringa 
    console.log(nomeValue);

    // aggiungi km da precorrere

    const prezzoAlKm = document.getElementById("prezzoAlKm"); // objecty | null
    const prezzoAlKmValue = parseInt(prezzoAlKm.value); // nuber
    console.log(prezzoAlKmValue, typeof prezzoAlKmValue);

    // aggiungi eta Utente

    const etaUtente = document.getElementById("etaUtente");
    const etaUteneteValue = etaUtente.value;
    console.log(etaUteneteValue);

    // ESECUZIONE LOGICA

    // Stabilire il prezzo del biglietto in base ai Km percorsi
    let costoBiglietto = prezzoAlKmValue * 0.21; // number
    console.log("Prezzo intero", costoBiglietto);
    // document.getElementById("intero").innerHTML = costoBiglietto;

    // Creare una variabile sconto

    let sconto = 0; // number

    

        // Se l'utente ha meno di 18 anni avrà uno sconto del 20%
        // altrimenti se ha più di 65 anni avrà uno sconto del 40%

        if (etaUteneteValue === "minorenne") {
            sconto = 20;
        } else if (etaUteneteValue === "Over 65") {
            sconto = 40;
        }

        console.log("sconto in %", sconto);

        // Applicare lo sconto in base alla fascia d'eta
        // creo variabile prezzoscontato

        const prezzoScontato = (costoBiglietto * sconto) / 100; // nuber
        console.log("Prezzo scontato in euro", prezzoScontato);

        const prezzoFinale = costoBiglietto - prezzoScontato;
        console.log("Prezzo Finale", prezzoFinale);

        document.getElementById("prezzoFinale").innerHTML = prezzoFinale;

    
})

// creo il reset attraverso il tasto annulla per azzerare tutti i valori

const resetta = document.getElementById("resetta");

resetta.addEventListener ("click", function() {
    document.getElementById("nomeUtente").value = "";
    document.getElementById("prezzoAlKm").value = "";

} )

