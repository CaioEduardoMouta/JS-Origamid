var pessoa = {
    nome:'André',
    idade: 28,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },

    perimetro: function(lado) {
        console.log(this)
        return lado * lado
}
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var height = 100;

var menu = {
    width:800,
    height: 50, 
    backgroundColor: '#84e',
    metadeHeight() {
        return this.height / 2;
    }
}


menu.backgroundColor = '#000';

menu.color = 'blue';

menu.lorem = function() {
    console.log('IPSUM')
}

var bg = menu.backgroundColor;

