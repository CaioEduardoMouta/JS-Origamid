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
        value: 2,
        configurable: false,
        writable: true,
    }
  })
  