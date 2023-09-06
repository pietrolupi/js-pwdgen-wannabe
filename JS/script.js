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
const name = prompt('Come ti chiami?');
const surname = prompt('Quale è il tuo cognome?');
const color = prompt('Qual è il tuo colore preferito?');

//2. 
const generatedPassword = name + surname + color + parseInt(23);

console.log(generatedPassword);

//3. 

document.getElementById('yourPassword').innerHTML = generatedPassword;
document.getElementById('userName').innerHTML = name;