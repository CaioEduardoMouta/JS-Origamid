// Crie um objeto com os seus dados pessoais
var pessoa = {
    nome: 'Caio Eduardo',
    sobrenome: 'Mouta',
    idade: 29,
    profissao: 'Assistente'
  }
  
// Deve possui pelo menos duas propriedades nome e sobrenome
pessoa.NomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
  carro.preco = 3000;
  // Crie um objeto de um cachorro que represente um labrador,
  var pessoa = {
    raca: 'Labrador',
    idade: 10,
    cor: 'preto',
    latir(pesso) {
        if(pessoa ==='homem') {
            console.log('Cachorro late');
        } else {
            console.log('Cachorro não late')
        }

    }
  }
  
  // preto com 10 anos, que late ao ver um homem
  
  