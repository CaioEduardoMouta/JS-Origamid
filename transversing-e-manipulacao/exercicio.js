// Duplique o menu e adicione ele em copy
const menu = document.querySelectori(".menu");
const copy = document.querySelectori(".copy");

const cloneNode = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq'); 
const primeiroDt = faq.querySelector('dt');


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD.remove);


// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML