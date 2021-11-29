// console.log('Trabalhando com lista');
// const salvador = `salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// push(): adiciona novos elements no array
listaDeDestinos.push(`Curitiba`) 
// splice(): remove um elemento de um Array. 
// o primeiro parametro é a quantidade de itens e segundo é posição do elemento
listaDeDestinos.splice(1, 1)
// conseguimos acessar um elemento específico de um array com [];
console.log(listaDeDestinos[1], listaDeDestinos[0]);
// console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);