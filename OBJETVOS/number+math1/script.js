console.log(Number.isNaN('ddasdas'));
console.log(Number.log(10.21))


console.log(parseFloat('  223,21'))
console.log(parseFloat('2121.31 Reais'))

console.log(parseInt('2121.31 Reais',10))

console.log(parseInt(2.31,10))

const preco = 21.312;

console.log(preco.toFixed());


const valor = 48.21;

valor = valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});

console.log(valor)
console.log(Math.PI)

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

console.log(aleatorio)
