const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const raposah2 = document.querySelector('h2');

const h2left = raposah2.offsetLeft;

const rect = raposah2.getBoundingClientRect();

console.log(rect, top);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
);