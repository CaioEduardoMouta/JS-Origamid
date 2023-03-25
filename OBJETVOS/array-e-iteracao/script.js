/* const carros = ['Fiat','GM','VW'];

carros.forEach((item,index,array) => {
    array(index) = 'Teste'
    console.log(item, index, array);

    
    console.log(carros); */

/* const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
    item.classList.add('ativa');
}); */

/* const carros = ['Fiat','GM','VW'];

const novoArray = carros.map(( item,index,array) => {
    console.log(item.toUpperCase(),index,array);
    return index;
})

const numeros = [2,4,6,8,201];
const numerosX2 = numeros.map(n => n * 2);



console.log(novoArray)
console.log(carros)

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const tempoAulas = aulas.map(aula => aula.min);

  

  const nomeAulas = (aula) => aula.nome;


const arrayNomeAulas = aulas.map(nomeAulas);


console.log(arrayNomeAulas);
console.log(tempoAulas)
   */

/* const aulas = [10,25,30]; */

/* const reduceAulas = aulas.reduce((acumulador, item) => {
  console.log(acumulador, item)
  return acumulador + item;
}, 0)

console.log(reduceAulas); */


/* const numeros = [10,25,303,54, 33,12];

const maiorNumero = numeros.reduce((anterior, atual) => {
 return anterior > atual ? anterior : atual;
}, 0)

console.log(maiorNumero) */

/* const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {})
 */

const frutas = ['Banana','Pêra','Uva'];
/* 
const temUva = frutas.some((item) => {
  return item === 'Uva';
}) */

const every = frutas.every((fruta) => {
  console.log(fruta)
  return 'Banana';
})

const indexUva =frutas.findIndex(item => {
  return item === 'Uvas';
})

console.log('Index:' ,indexUva)

console.log(every)

/* console.log(temUva); */

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); 

console.log(maiorQue3)

const frutas1 = ['Banana', undefined, null, '','Uva',0,'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  console.log(item);
  return item;
})

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => {
  return aula.min >= 15;
})

console.log(maiores15)
