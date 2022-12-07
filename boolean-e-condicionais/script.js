var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10;
} else if (possuiDoutorado){
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada')
}

var nome;

if(nome) {
    console.log(nome);

} else {
    console.log('Nome não existe');
}

if(!possuiGraduacao) {
    console.log('Não possui graduação');
}

var x = 'Gato';

console.log(x !== 'Gato')

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5)
if(condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}