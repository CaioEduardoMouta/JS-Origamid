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

const carros = ['Fiat','GM','VW'];

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

  

  const nomeAulas = (aula) => aula.nome


const arrayNomeAulas = aulas.map(nomeAulas);


console.log(arrayNomeAulas);
console.log(tempoAulas)
  