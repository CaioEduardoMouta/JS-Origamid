const pessoa = new Object({
  nome:'André'
})

console.log(pessoa)

const carro =  {
  marca: 'Marca',
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return valor;
  },
  acelerar() {
    return this.marca + ' acelerou';

  },

  buzinar() {
    return this.marca + 'buzinou';
  }
}

const honda = Object.create(carro);
