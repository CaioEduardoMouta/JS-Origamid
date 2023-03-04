
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], 
function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; 


const carros = new Array('GM','FIAT','RENAULT');

carros[2] = 'VW';
carros[3] =  'Toyota';
carros[20] = 'Citroen';

console.log(carros.length);


const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

const obj = {
    0: 'Lorem',
    1: 'Ipsum',
    2: 'Default',
}

const objArray = Array.from(obj);

console.log(li)
console.log(arrayLi)

const frutas = ['banana', 'Pear', 'grape purple', 'green grape'];

console.log(frutas[2].length)

const instrumentos = ['Guitar', 'Lorem','Ipsum'];

const idade = [32,21,22,59,2,9,11];

console.log(instrumentos)
console.log(idade)
