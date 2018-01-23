// Principais tópicos abordados nos exercícios abaixo:
//     Node:
//         - leitura de argumentos
//         - módulos

//////////////////////////////////////////////////////

// Exercício: criar um módulo para fazer a leitura, tratamento e retorno de argumentos passados pelo usuário

module.exports.tratarArgumentos = (argumentos) => {
    let argumentosTratados = [];

    for(let i = 2; i < argumentos.length; i++){
        argumentosTratados.push(argumentos[i]);
    }

    return argumentosTratados;
}
