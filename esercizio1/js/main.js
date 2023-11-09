'use strict';

// const elementMail = document.getElementById('email');
// console.log(elementMail.value);

const arrayMail = ['prova1', 'prova2', 'prova3', 'prova4'];

const inputUtente = prompt('Inserisci la tua mail');
let verifica = false;

//Itero gli elementi dell'array
for (let i = 0; i < arrayMail.length; i++) {
  //verifico se input è uguale all elemento array[i]
  if (arrayMail[i] === inputUtente) {
    verifica = true;
  }
}

//Stampa
if (verifica === true) {
  console.log('La tua mail è in lista');
} else {
  console.log('La tua mail NON è in lista');
}
