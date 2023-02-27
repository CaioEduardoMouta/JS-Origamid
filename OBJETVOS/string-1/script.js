const frase = 'A melhor linguagem é';
const linguagem = '&&DA';

const fraseFinal = frase.concat(linguagem,'||', 'Lorem' );

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(listaFrutas.includes(fruta));


console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, -2)); 
console.log(transacao1.slice(-5));

console.log(fruta.lastIndexOf('na'))

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199','R$ 120000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart);
})

const frase2 = 'Ta';

frase2.repeat(5);

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace('Camisas', 'Shirts');
listaItens - listaItens.replace(/[]+/g, ',')

const arrayLista = listaItens.split('s')

console.log(arrayLista)

const htmlText = '<div>O melhor item</div> <div>Lorem Ipsum</div>'
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText)
console.log(htmlArray)

const frutasArray = ['Banana','Melancia','Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase === 'FEMININO');

const teste = '    CaiO  ';

console.log(teste.trim());
console.log(teste.trimEnd());
console.log(teste.trimStart());
