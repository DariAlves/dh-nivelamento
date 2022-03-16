/*
    Tarefa Ninja:

    Criar uma função que irá se chamar calcularNumerosDeClones.

    Ela recebe um único parâmetro que representa o ninja que será escolhido por Kakashi sensei para que Naruto realize uma cópia dele. 

    Essa primeira função deverá retornar o total de clones do ninja passado como parâmetro. 

    Ou seja, quantas vezes o nome do ninja passado como parâmetro aparece no array de ninjas.
*/

//prettier-ignore
var ninjas = [
    'sasuke', 'kakashi', 'sakura', 'sasuke',
    'kakashi', 'sakura', 'kakashi', 'sasuke',
    'kakashi', 'kakashi', 'sasuke', 'kakashi',
    'sasuke', 'kakashi', 'sakura', 'kakashi',
    'kakashi', 'sasuke', 'kakashi', 'sakura',
    'sakura', 'kakashi', 'kakashi', 'sasuke',
    'kakashi', 'kakashi', 'sasuke', 'kakashi',
    'kakashi', 'sasuke', 'kakashi', 'sakura',
    'sakura', 'kakashi', 'sakura', 'sakura',
    'sakura', 'sasuke', 'kakashi', 'kakashi',
    'sakura', 'sakura', 'kakashi', 'sasuke',
    'kakashi', 'kakashi', 'sasuke', 'kakashi',
    'sasuke', 'kakashi', 'sakura', 'kakashi',
    'kakashi', 'sasuke', 'kakashi', 'sakura',
    'sakura', 'kakashi', 'kakashi', 'sasuke',
    'kakashi', 'kakashi', 'sasuke', 'kakashi',
    'kakashi', 'sasuke'
];

function calcularNumeroDeClones(ninja) {
  var totalClones = 0;

  for (var i = 0; i < ninjas.length; i++) {
    if (ninja === ninjas[i]) {
      totalClones++;
    }
  }
  return `Naruto fez ${totalClones} clones do(a) ${ninja}.`;
}

// teste
console.log(calcularNumeroDeClones('sakura'));
console.log(calcularNumeroDeClones('sasuke'));
console.log(calcularNumeroDeClones('kakashi'));
