'use strict';

const btnInvio = document.getElementById('invio');
const elementSiLista = document.getElementById('si-lista');
const elementNoLista = document.getElementById('no-lista');
btnInvio.addEventListener('click', function () {
  //Estraggo il valore dell'input con id email
  const elementMail = document.getElementById('email').value;
  console.log(elementMail);

  //Array di verifica
  const arrayMail = [
    'john.quimson@gmail.com',
    'geatanofrascolla@gmail.com',
    'edwin@gmail.com',
    'evan@gmail.com',
    'ciao@gmail.com',
  ];

  //Dichiaro una variabile verifica con false
  let verifica = false;

  //Itero gli elementi dell'array
  for (let i = 0; i < arrayMail.length; i++) {
    //verifico se input è uguale all elemento array[i]
    if (arrayMail[i] === elementMail) {
      verifica = true;
    }
  }

  //Condizioni di stampa
  if (verifica === true) {
    console.log('La tua mail è in lista');
    //se si verifica la condizione, rimuovi la classe d-none
    elementSiLista.classList.remove('d-none');
  } else {
    console.log('La tua mail NON è in lista');
    //se si verifica la condizione, rimuovi la classe d-none
    elementNoLista.classList.remove('d-none');
  }
});
