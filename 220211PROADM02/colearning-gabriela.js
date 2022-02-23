let alunos = ['Gabriela', 'Dari', 'Pedro', 'Ana']; // 4
//  índice        0         1       2       3

// let tamanhoArray = alunos.length;

// // array + colchetes + índice
// // array[índice]

// console.log(alunos[3])

// console.log(tamanhoArray);


// Buscar todos os elementos do array

function encontrarAluno(array, aluno) {
    for (let indice = 0; indice < array.length; indice++) {
        return 'Olá, eu sou o ' + aluno;
    }

    return 'Não encontramos ninguém chamado ' + aluno
}

encontrarAluno(alunos, 'Pedroca')


// console.log(encontrarAluno(alunos, 'Pedroca'))

// function positivosENegativos(array) {
//     let positivos = []
//     let negativos = []

//     for (let indice = 0; indice < array.length; indice++) {
//         if (array[indice] > 0) {
//             positivos.push(array[indice])
//         } else {
//             negativos.push(array[indice])
//         }
//     }

//     return [positivos, negativos]
// }

// let numerosTeste = [-10, -50, 50, 100, -78, 500];

// // -10 -5   0   1   3   5

// console.log(positivosENegativos(numerosTeste))
