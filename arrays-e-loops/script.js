var jogos = ['God of War', 'Lorem', 'Ipsum', 'Dolor'];


/* var ultimojogo = jogos.pop(); */
/* for loop possui 3 partes 
InputDeviceInfo, condição e incremento  */
for( var numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

var i = 0;

while (i < 100) {
    console.log(i);
    i++;
}

var jogos = ['God of War', 'Lorem', 'Ipsum', 'Dolor'];

for(var item = 0; jogos.length; item++ ) {
    console.log(jogos[item]);
    if(jogos[item === 'Lorem']) {
        break;
    }
}

var frutas = ['Banana','Pear','pineapplle','aplle'];

frutas.forEach(function(fruta, index, array) {
    frutas.pop
    console.log(fruta, index, array)
});

