/* const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais.descricao');
console.log(h1.innerHTML)
console.log(h1.outerHTML)

h1.innerHTML = "<p>Novo Titulo</p>"

console.log(animaisLista.innerText);

const lista = document.querySelector('.animais-lista');

console.log(lista.children(lista.children.length -1));

console.log(lista.querySelector('li-last-child'));

console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector(".mapa")

contato.replaceChild(mapa, titulo);

/* contato.insertBefore(animais, titulo); */

/* const novoh1 = document.createElement('h1');
novoh1.innerText = "Novo Titulo";
novoh1.classList.add('Titulo')


mapa.appendChild(novoh1);
console.log(novoh1); */ 

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);

