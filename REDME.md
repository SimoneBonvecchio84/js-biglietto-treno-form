# Prezzo del biglietto

1. Chiediamo all'utente i chilometri che vuole percorrere.
2. Chiediamo all'utente quanti anni ha, e sulla base di ciò applichiamo lo sconto.
---
3. INPUT 
   - [x] Chiediamo all'utente i km che vuole percorrere.
   - [x] Chiediamo all'utente quanti anni ha.
---

4. MILESTONE 1:
       Creiamo due input in HTML ed un bottone senza nessuna esetica
    - [x] Creazione bottone genera
    - [x] Creazione bottone annulla  
    - [x] Creare collegamento ed evento click per stampare Info degli input nome Utente,
          e Km percorso dall' Utente
    - [x] Creazione input nel quale inserire Nome e Cognome dell'Utente  
    - [x] Creazione input nel quale inserire Km da percorrere
    - [x] Creazione input con menù a tendina dove inserire 
         la fascia d'età
     
           
5. ESECUZIONE LOGICA
   Se (il valore inserito è diverso da null svolgi le operazioni qui sotto) 
   
    Calcolo Prezzo
   - [x] calcoliamo il prezzo del biglietto in base ai Km da percorrere
    ---
     Se (L'utente ha un età inferiore ha 18 anni)
            risultato = prezzoTotale * 0.2 
            prezzo scontato = prezzoTotale - risultato
            Stampa il prezzo scontato in HTML
     
     Altrimenti Se (L'utente ha più di 65 anni) 
            risultato = prezzoTotale * 0.4
            prezzo scontato = prezzoTotale - risultato
            Stampa il prezzo sconatato in HTML
            

     Altrimenti              
            non viene applicato nessuno sconto
            visualizza in Html il prezzo intero in HTML
    
    Adattamento
    - [x] Il prezzo finale deve essere adattato in forma umana

Altrimenti 
       i valori inseriti sono nulli
        
---

6. OUTPUT
    - [x] Stampiamo prezzo finale del biglietto