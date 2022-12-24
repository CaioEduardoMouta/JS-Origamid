// nomeie 3 propriedades ou métodos de strings
var nome = 'Lorem';

/* fixed
length
split
slice */

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');

/* addEventListener
append
appendChild
removeEventListener
requestFullscreen */


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var campeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < campeao.length; i++) {
    console.log(`O brasil ganhou a copa de ${campeao[i]}`)
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var item = 0; frutas.length; item++ ) {
    console.log(frutas[item]);
    if(frutas[item === 'Pera']) {
        break;
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var  ultimaFruta = frutas(4); 
