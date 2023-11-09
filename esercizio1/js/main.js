'use strict';

// const elementMail = document.getElementById('email');
// console.log(elementMail.value);

const arrayMail = ['prova1', 'prova2', 'prova3', 'prova4'];

const inputUtente = prompt('Inserisci la tua mail');

for (let i = 0; i < arrayMail.length; i++) {
  if (arrayMail[i] === inputUtente) {
    console.log('La tua mail è sulla lista, alla posizione: ' + i);
  } else {
    console.log('La tua mail NON è in lista');
  }
}
