// Variáveis

// Tipos de dados
let nome = 'Dari';
let idade = 36;
let peso = 64.5;
let jogosFavoritos = ['Chrono Trigger', 'Zelda - Ocarina of time'];
let temFilhos = false;

console.log('\nTipos de dados');
console.log(`O tipo da variável nome é ${typeof nome}.`);
console.log(`O tipo da variável idade é ${typeof idade}.`);
console.log(`O tipo da variável peso é ${typeof peso}.`);
console.log(`O tipo da variável jogosFavoritos é ${typeof jogosFavoritos}.`);
console.log(`O tipo da variável temFilhos é ${typeof temFilhos}.`);

// Operadores
console.log('\nOperadores aritméticos');

// Aritméticos
let numeroA = 50;
let numeroB = 10;

let soma = numeroA + numeroB;

console.log(`A soma de ${numeroA} + ${numeroB} é igual a ${soma}.`);

let numeroC = 50;
let numeroD = 10;

let subtracao = numeroA - numeroB;

console.log(`A subtração de ${numeroA} - ${numeroB} é igual a ${subtracao}.`);

let numeroE = 50;
let numeroF = 10;

let divisao = numeroA / numeroB;

console.log(`A divisão de ${numeroA} / ${numeroB} é igual a ${divisao}.`);

let numeroG = 50;
let numeroH = 10;

let multiplicacao = numeroA * numeroB;

console.log(
  `A multiplicação de ${numeroA} x ${numeroB} é igual a ${multiplicacao}.`
);

console.log('\nMódulo %');
// Operador Módulo % - Resto da divisão
let valor1 = 10;
let valor2 = 2;

console.log(
  `O resto da divisão de ${valor1} e ${valor2} é ${valor1 % valor2}.`
);

// Ordem de precedência
console.log('\nOrdem de precedência');
let valor3 = valor1 + valor2 / 2;
let valor4 = (valor1 + valor2) / 2;

console.log(`Sem parênteses: ${valor3}`);
console.log(`Com parênteses: ${valor4}`);

console.log('\nOperadores de comparação');

console.log(`Maior que >`);
console.log(`Menor que >`);
console.log(`Maior ou igual que >=`);
console.log(`Menor ou igual que <=`);
console.log(`Igual ==`);
console.log(`Diferente !=`);

// Operadores Lógicos - Retornam um booleano
console.log('\nOperadores de lógicos');
console.log(`Operador E - &&`);
console.log(`Operador OU - ||`);

// Tabela-verdade OU
console.log('\nTabela-verdade do &&');
console.log(`true && true: true`);
console.log(`true && false: false`);

// Tabela-verdade E
console.log(`\nTabela-verdade do ||`);
console.log(`true || true: true`);
console.log(`true || false: true`);

// Operadores de atribuição
console.log('\nOperadores de atribuição');
console.log(`Sinal de igual: =`);

// Condicionais if
// console.log('\nCondicionais if - else');

// let altura = 160;

// if (altura > 160) {
//   console.log(`Sua altura é de ${altura} cm. Você pode brincar.`);
// } else {
//   console.log(`Sua altura é de ${altura} cm. Você não pode brincar.`);
// }

// If - else if - else
console.log('\nCondicionais if - else if - else');
let altura = 170;

// if (altura >= 170) {
//   console.log(`Sua altura é de ${altura} cm. Você pode brincar sozinho(a).`);
// } else if (altura >= 160) {
//   console.log(
//     `Sua altura é de ${altura} cm. Você pode brincar acompanhado(a).`
//   );
// } else {
//   console.log(`Sua altura é de ${altura} cm. Você não pode brincar.`);
// }

// Cuidado!! - Erro na sequência lógica
// if (altura >= 160) {
//   console.log(
//     `Sua altura é de ${altura} cm. Você pode brincar acompanhado(a).`
//   );
// } else if (altura >= 170) {
//   console.log(`Sua altura é de ${altura} cm. Você pode brincar sozinho(a).`);
// } else {
//   console.log(`Sua altura é de ${altura} cm. Você não pode brincar.`);
// }
