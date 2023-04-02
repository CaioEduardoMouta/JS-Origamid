const perimetro = new Function('lado','return + 4');

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

carros.forEach((item) => {
    console.log(item)
})