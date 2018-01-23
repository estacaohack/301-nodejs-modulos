// Principais tópicos abordados nos exercícios abaixo:
//     Node:
//         - módulos

//////////////////////////////////////////////////////

// Exercício: criar um módulo que exporta uma função que retorna numeros pares dado um vetor de números

module.exports.retornarPares = (numeros) => {
    let pares = [];

    for(let numero of numeros){
        if(numero % 2 == 0){
            pares.push(numero);
        }
    }
    
    return pares;
}
