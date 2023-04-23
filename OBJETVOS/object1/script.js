const pessoa = new Object({
    nome:'André'
  })
  
  console.log(pessoa)
  
  /* const carro =  {
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
  } */
  
/*   const honda = Object.create(carro);
  honda.init('Civic');

  const lamborghinni = Object.create(carro).init('Ferrari');
  console.log(lamborghinni.acelerar());

  const funcaoAutomovel = {
    acelerar() {
        return 'Acelerou';
    },
    buzinar() {
        return 'Buzinou';
    },
  }

  const moto = {
    capacete: true,
  }

  Object.assign(moto, funcaoAutomovel);

  Object.defineProperties(moto, {
    rodas: {
        get() {
          return this._rodas;
        },

        set() {
          this._rodas = valor * 4;
        }
    /*     configurable: false,
        writable: true, 
    }
  })

  console.log(moto);

  const innerHeightConfig = Object.getOwnPropertyDescriptor(window,'innerHeight');
  
  Object.getOwnPropertyNames(Array.prototype)



  console.log(Object.getPrototypeOf(''));
  console.log(Array.prototype);

  const frutas1 = ['Banana', 'Pêra'];
  const frutas2 = ['Banana', 'Pêra'];

  const novaFruta = frutas1;

  novaFruta[0] = 'Uva';

console.log(frutas1)
Object.is(frutas1 , frutas2)

const carro = {
  marca: 'Renault',
  ano: 2023,
}

/* Object.seal(carro); */
/* Object.preventExtensions(carro); 
Object.freeze(carro);
carro.portas = 4;
delete carro.marca;

carro.marca = 'Honda'

console.log(carro)
/* console.log(Object.isExtensible(carro)) 
console.log(Object.isFrozen(carro)) */

const frutas = ['Banana', 'Uva'];
const frases = 'Oi frase';
const somar = function(a,b) {
  return a + b;
};

const carro = {
  marca: ford
}

console.log(carro.toString());

console.log(Object.prototype.toString.call(frases));