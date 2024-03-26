//INPUT
// Trovo il bottone nella pagina
const sendBtn = document.getElementById("send-btn"); //object | null
console.log(sendBtn);

// Aggiungo l evento al bottone

sendBtn.addEventListener("click", function () {
    // creazione Variabile nome dall'utente

    const userName = document.getElementById("userName"); // object | null
    console.log(userName);

    const nameValue = userName.value; // string 
    console.log(nameValue);
})


