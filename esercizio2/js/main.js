'use strict';

let dadoUser = Math.floor(Math.random() * 6) + 1;
console.log('User: ' + dadoUser);
let dadoPC = Math.floor(Math.random() * 6) + 1;
console.log('Computer: ' + dadoPC);

if (dadoUser === dadoPC) {
  console.log('Pari');
} else if (dadoUser > dadoPC) {
  console.log('Hai vinto!');
} else if (dadoUser < dadoPC) {
  console.log('Hai Perso.');
}
