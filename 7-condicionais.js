const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log('Destinos possíveis');
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if(estaAcompanhada == true) {
//     // a pessoa é menor de idade
//     console.log("Comprador está acompanhada");
//     listaDeDestinos.splice(1, 1); // remove item
// } else {
//     console.log('Não é maior de idade e não posso vender');
// }

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Comprador mairo de idade')
} else {
    console.log('Não é maior de idade é não pode vender');
}
// n: é um caractere especial que permite pular uma linha no momento de imprimir a mensagem de texto.
console.log('Embarque: \n\n');
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem');
} else {
    console.log('Voce não pode embarcar');
}