/* CONSEGNA: Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23.

PASSAGGI:
1. salvare come variabili i prompt del nome, cognome e colore preferito.

2.comporre la password da proporre all'utente mettendo in fila le variabili e aggiungendo 23.

3.stampare messaggio sulla pagina.

*/

//1.
const name = prompt('Come ti chiami?').trim().split(" ").join("");
const surname = prompt('Quale è il tuo cognome?').split(" ").join("");
const color = prompt('Qual è il tuo colore preferito?').split(" ").join("");

//2. 
const generatedPassword = name + surname + color + parseInt(23);

console.log(generatedPassword);

//3. 

document.getElementById('yourPassword').innerHTML = generatedPassword;
document.getElementById('userName').innerHTML = name;


//3. - opzione di inserimento secondaria:

const generatedMessage = `
   <div class="container">
      <div class="card m-auto mt-5" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Ciao ${name} !</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">La tua password perfetta è:</h6>
          <p class="card-text"> ${generatedPassword} </p>
          
        </div>
      </div>
  </div>

`;

console.log (generatedMessage);
document.getElementById('customMessage').innerHTML = generatedMessage;