const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(function(item, index, array) {
    console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

tituloArray.forEach(function(item) {
    console.log(item);
});


