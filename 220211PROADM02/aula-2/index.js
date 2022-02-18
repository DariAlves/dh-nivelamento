// // Variável
// let aluno = "Goku";

// console.log(aluno);

// // Array
// let alunos = ['Goku', 'Vegeta', 'Trunks', 'Kuririn', 'Gohan'];

// console.log(alunos);

// // Tamanho do array - me devolve um número
// let tamanhoArray = alunos.length;

// console.log('O tamanho do meu array é ' + tamanhoArray);

// // índice de um array 
// // começa a partir do índice zero

// let trindadeDC = ['Batman', 'Superman', 'Mulher-maravilha'];
// // índice            0          1               2            3

// // estrutura
// // array + colchetes + índice
// // array[índice]

// console.log(trindadeDC[0]);
// console.log(trindadeDC[1]);
// console.log(trindadeDC[2]);
// console.log(trindadeDC[3]); // undefined

// // Laços de repetição
// // Estrutura - for loop
// // variável - condição - incremento

// // Se minha condição for verdadeira, loop continua rodando.


// function tabuada(n) {
//     for (let numero = 1; numero <= 10; numero++) {
//         console.log(n + " x " + numero + " = " + numero * n)
//     }
// }

// tabuada(2)

// Percorrer elementos de um array usando o laço de repetição 

// let princesasDisney = ['Cinderela', 'Merida', 'Ariel', 'Jasmine', 'Bela','Aurora'];
// índices                0            1         2         3         4     5

// console.log(5 < princesasDisney.length)

// for (let indice = 0; indice < princesasDisney.length; indice++) {
//     console.log(princesasDisney[indice])
// }

// // índice
// console.log(indice)

// elemento do array
// console.log(princesasDisney[2] == 'Mulan');

// for (let numero = 1; numero <= 20; numero++) {
//     if (numero % 2 == 0) {
//         console.log("Par: " + numero);
//     } else {
//         console.log("Ímpar: " + numero);
//     }
// }


// let livrosHarryPotter = ['A Cálice de Fogo', 'A Pedra filosofal', 'O Retorno do Rei']
// let livrosSenhorDosAneis = ['A Sociedade do Anel', 'As Duas Torres'];

// let retornoDoRei = livrosHarryPotter.pop();

// livrosSenhorDosAneis.push(retornoDoRei);

// console.log(livrosSenhorDosAneis);
// console.log(livrosHarryPotter);

// function osPares(limitador) {
//     for(let numero = 1; numero <= limitador; numero++) {
//         if (numero % 2 == 0) {
//             console.log("O numero " + numero + " é par")
//         }
//     }
// }

// osPares(10)

// function somaDosPares(numero) {
//     let somaDosNumerosPares = 0;

//     for (let i = 1; i <= numero; i++) {
//         if (i % 2 == 0) {
//             somaDosNumerosPares
//         }
//     }

//     return somaDosNumerosPares
// }


// console.log(somaDosPares(20)) // 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20

function maiorQueNum(array, num) {
    let novoArray = [];
  
    for (let indice = 0; indice < array.length; indice++) {
      if (array[indice] > num) {
        novoArray.push(array[indice])
      }
    }
  
    return novoArray;
}

let numeros = [10, 5, 7, 25, 30, -5, 8]
// índice       0  1  2   3   4   5   6

let numeroTeste = 10

console.log(maiorQueNum(numeros, numeroTeste))
  