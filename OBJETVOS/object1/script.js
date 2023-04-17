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
        writable: true, */
    }
  })

  console.log(moto);

  const innerHeightConfig = Object.getOwnPropertyDescriptor(window,'innerHeight');
  
  Object.getOwnPropertyNames(Array.prototype)

  const frutas = ['Banana'];

  console.log(Object.getPrototypeOf(''));
  console.log(Array.prototype);

  const frutas1 = ['Banana', 'Pêra'];
  const frutas2 = ['Banana', 'Pêra'];

