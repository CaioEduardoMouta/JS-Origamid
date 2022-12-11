function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi () {
    return 3.14;
}

var total = 5 * pi();

console.log(total);


function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if(cor === 'green') {
        return 'I like forest';
    } else if (cor === 'blue') {
        return 'I like sky';
    } else {
        return 'I dont like colors';
    }
}

console.log(corFavorita);


addEventListener('click', function(){ console.log('LOREM')});


function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80)/
console.log(imc2(80,1.98));

function terceiraIdade(idade){
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'
    }else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
   
}

console.log(terceiraIdade('oi'));


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;

}

var profissao = "Developer";

function dados() {
    var nome = 'Lorem';
    var age = 29;
    
    function others() {
        var endereco = 'Ipsum'
        var idade = 30;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }

    return others();
}

console.log(dados());