// function osPares(lista){ 
//     for(var i = 0;i < lista.length;i++){
//         if(i %2 == 0){ 
//             console.log("O numero " + i + " é par") 
//     } else{
//         console.log("O numero " + i + " é impar") 
//     } 
// } 
// }


// let numeros = [1,2,3,4,5,6,7,8]

// osPares(numeros)

// for(let i = 0; i < 11; i++) {
//     if(i % 2 != 0) {
//         console.log(i)
//     }
// }


// for(let i = 1; i < 11; i++) {
//     if(i % 2 == 0) {
//         continue
//     }

//     console.log(i)
// }


// var listaDeLucro = [100, 30, 300, 10, 600, 10]
// var lucroTotal = 0;
// // var condicao = 0;
// // var arrayLucro = []

// // //seu loop aqui

// for(let i = 0; i < listaDeLucro.length; i++) {
//     if(listaDeLucro[i] > 0) {
//         lucroTotal = lucroTotal + listaDeLucro[i]
//         // arrayLucro.push(listaDeLucro[i])
//         // condicao++;
//     }
// }

// // let resultado = listaDeLucro.reduce((prev, next) => prev + next)

// // console.log(resultado);

// console.log(lucroTotal)
// console.log(condicao)
// console.log(arrayLucro)

// let valor1 = 0; 
// let valor2 = 20;

// valor1 = valor1 + valor2;

// console.log(valor1 + valor2);



// function recuperaPares(array) {
//     let arrayPares = [];
//     let arrayImpares = [];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 == 0) {
//             arrayPares.push(array[i])
//         } else {
//             arrayImpares.push(array[i])
//         }
//     }

//     return [arrayPares, arrayImpares];
//     return arrayPares;
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let resultado = recuperaPares(numeros)

// console.log(resultado);


// function somatoriaBaixoValor(array) {
//     let somaDosValores = 0;

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > 0) {
//             if (array[i] <= 1000) {
//                 somaDosValores = somaDosValores + array[i]
//             }
//         }
//     }

//     return somaDosValores;
// }

// let numeros = [100, 150, 1000, -500, -400]

// console.log(somatoriaBaixoValor(numeros))

// var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

// var grupoA = []
// var grupoB = []
// var grupoC = []

// for(let i = 0; i < alunos.length; i++) {
//     if(alunos[i] > 149 && alunos[i] < 160) {
//         grupoA = alunos[i]
//     } else if (alunos[i] > 159 && alunos[i] < 170) {
//         grupoB = alunos[i]
//     } else  {
//         grupoC = alunos[i]
//     } 

// }

// console.log(grupoA);
// console.log(grupoB);
// console.log(grupoC);



// function separacaoPorAltura (alunos){ 
//     var grupoA = [] 
//     var grupoB = [] 
//     var grupoC = [] 
//     for (var i=0; i< alunos.length; i++){ 
//         if (alunos[i] >= 150 && alunos[i] <= 159) { 
//             grupoA.push(alunos[i]) 
//         } else if (alunos[i] > 160 && alunos[i] <= 169){
//             grupoB.push(alunos[i])
//         } else { 
//             grupoC.push(alunos[i]) 
//         } 
//     } 
//     return [grupoA, grupoB, grupoC]; 
// } 

// var alunos = [190, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160] 

// console.log(separacaoPorAltura(alunos))


// Fatorial

// function fatorial(numero) {
//     let resultado = 1;

//     for(let i = 1; i <= numero; i++) {
//         resultado = resultado * i
//     }

//     return resultado;
// }

//  function fatorial(fatorial) { 
//      let resultado = 1 

//      for (let i = fatorial; i > 1; i--) { 
//         // resultado *= i 
//         resultado = resultado * i 
//     } 
//     return resultado 
// }


// console.log(fatorial(0)); // 1
// console.log(fatorial(1)); // 1
// console.log(fatorial(4)); // 24
// console.log(fatorial(5)); // 120
// console.log(fatorial(6)); // 720
// console.log(fatorial(7)); // 5040

/*
    FizzBuzz

    Se o número for múltiplo de 3: deve imprimir "Fizz" no lugar do número

    Caso contrário, se o número for múltiplo de 5: deve imprimir "Buzz" no lugar do número
    
    Caso contrário, se o número for múltiplo de 3 e 5: deve imprimir "FizzBuzz" no lugar do número

    Caso contrário, imprima somente o número

*/

function fizzBuzz(numero) {
    for(let i = 1; i <= numero; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

// Adriana
// function fizzBuzz(numero){
//     for(let i = 1; i < numero; i++){

//         if(numero % 3 == 0){
//             console.lo('Fizz')
//         }else if(numero % 5 == 0){
//             console.log('Buzz')
//         }else if(numero % 5 == 0 && numero % 3 == 0){
//             console.log('FizzBuzz')
//         } else {
//             console.log(numero)
//         }
//     }
// } 

fizzBuzz(20)



// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz


// Adriana
