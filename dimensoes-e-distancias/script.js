const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const raposah2 = document.querySelector('h2');

const h2left = raposah2.offsetLeft;

const h2rect = raposah2.getBoundingClientRect();

console.log(h2rect, top);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
);


const small = window.matchMedia('{max-width: 600px}').matches;

if(small) {
  console.log('Usuário Mobile');
} else {
  console.log('Usuário Desktop');
}

