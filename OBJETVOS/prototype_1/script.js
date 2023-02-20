function Pessoa(nome,idade) {
   this.nome = nome;
   this.idade = idade;
   this.abracar = function() {
    return 'Abraçou';
   }

   this.andar = function() {
    return 'Andou pelo Objeto'
   } 
}

Pessoa.prototype.andar = function() {
    return this.nome + 'Pessoa Andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + 'Pessoa nadou';
}

const lorem = new Pessoa('Lorem',391);

/* console.log(Pessoa.prototype)
console.log(lorem.prototype) */

const pais = 'Brasil';
const cidade = new String('Sampa');

const listaAnimais = ['Cão','Gato','Horse'];

const lista = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
    marca: 'Aston',
    preco: 2000,
    andar() {
        return true;
    }
}