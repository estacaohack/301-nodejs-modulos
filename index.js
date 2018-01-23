// Principais tópicos abordados nos exemplos abaixo:
//     Node:
//         - leitura de argumentos
//         - módulos
////////////////////////////////////////////////////

// Exemplos desenvolvidos durante a aula (Tratar argumentos | Retornar números pares de um vetor de números)

// Sem módulos
let argumentos = process.argv;
let numeros = [];

for(let i = 2; i < argumentos.length; i++){
    numeros.push(Number(argumentos[i]));
}

console.log(numeros);

/////

let pares = [];

for(let numero of numeros){
    if(numero % 2 == 0){
        pares.push(numero);
    }
}

console.log(pares);


// Com módulos
const interpretadorPar = require('./interpretadorPar.js');
const tratadorArgumentos = require('./tratadorArgumentos.js');

let argumentos = process.argv;

let argumentosTratados = tratadorArgumentos.tratarArgumentos(argumentos);

console.log(interpretadorPar.retornarPares(argumentosTratados));



