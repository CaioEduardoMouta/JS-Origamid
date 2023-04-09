/* const perimetro = new Function('lado','return + 4');

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(3,3));

console.log(somar.length);

function darOi(nome, idade) {
    console.log('Oi para você' + nome + idade)
}

darOi.call([],' Caio', 99);

function descricaoCarro() {
    console.log(this)
    console.log(this.marca + this.ano);
}

descricaoCarro.call({marca: 'Hyundai', ano:'2101'});

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach.call(carros, (item) => {
    console.log(item)
})

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    console.log(this);
    this.element.classList.add(classe)
}


Dom.prototype.ativo.call();
 */
/* const ul = new Dom('ul'); */

/* const li= {
    element: document.querySelector('li')
} */


/* ul.ativo.call(null, 'ativo'); */
/* ul.ativo('ativar');
 */

const frutas = ['Kiwi','Manga','Limão'];

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3
}

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.call(li, (item) => {
    console.log(item);
})

console.log(filtro());

console.log(li)

const numeros = [332312,3132,321,31,213,9];

const $ = document.querySelectorAll.bind(document);

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
  }

  const gm = {
    marca: 'ONIX'
  }

  const acelerarGM = carro.acelerar.bind(honda);

  console.log(acelerarGM(300,20))
  console.log(carro)