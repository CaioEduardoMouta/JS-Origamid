function Carro(marcaAtribuida,precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}


const honda = new Carro('Honda',3000);
const fiat = new Carro('Fiat',4005);

function Carro2(marca,precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    console.log(this);
    this.marca = marca;
    console.log(this);
    this.preco = precoFinal;
    console.log(this)
}

const mazda = new Carro2('Mazda',6000);