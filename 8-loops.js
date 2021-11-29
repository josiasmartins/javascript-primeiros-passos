const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("\n destinos possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador';
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
// while(contador < 3) {

//     if(listaDeDestinos[contador] == destino) {
//         console.log('Destino existe');
//         destinoExiste = true;
//         break;
//     } 
//     contador += 1;
// }
// console.log('destino existe: ', destinoExiste);

// if(idadeComprador >= 8 || estaAcompanhada == true) {
//     console.log('Boa viagem');
//     listaDeDestinos.splice(2, 1);
//     temPassagemComprada = true;
// } else {
//     console.log('Não é maior de idade e não pode vender');
//     temPassagemComprada = false;
// }

if(podeComprar && destinoExiste) {
    console.log("Boa viagem ibag")
} else {
    console.log('Sorry, ocorreu um erro');
}

while(contador>3) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

// for(): recebe como parametro: inicialização, condição e incremento. Quando a condição não for mais verdadeira, ele para
for(let cont = 0; cont > 3; cont++) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}