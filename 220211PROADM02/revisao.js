// Dari - Você não ganhou nada :(
function pedraPapelTesoura(jogador, computador) {
    if (jogador == computador) {
        return "Empate"
    } else if ((jogador == 'pedra' && computador == 'tesoura') || (jogador == 'papel' && computador == 'pedra') || (jogador == 'tesoura' && computador == 'papel')) {
        return "Você venceu!"
    } else {
        return "Você perdeu!"
    }
}

// Giselle - // Você ganhou dois chocolates 💓!!!
// function pedraPapelTesoura(jogador, computador){

//     if(jogador == "pedra"){ 
//         if (computador == "pedra"){
//             return "empate"
//     } else if ( computador == "papel"){
//             return "Você perdeu"
    
//     } else if( computador == "tesoura"){
//             return "Você venceu"
//         }
//     }
    
//     if (jogador == "papel") {
//         if (computador == "papel"){
//             return "empate"
//     } else if ( computador == "tesoura"){
//             return "Você perdeu"
//     } else if(computador == "pedra"){
//             return "Você venceu"
//         }
//     }
    
//     if ( jogador == "tesoura"){
//         if (computador == "tesoura"){
//             return "empate"
//     } else if ( computador == "pedra"){
//                 return "Você perdeu"
//     } else if( computador == "papel"){
//             return "Você venceu"
    
//         }
//     }
// } 


// Thiago - Você ganhou um parabéns
// function pedraPapelTesoura(jogador, computador) {
//     if (jogador == "pedra") { 
//         if (computador == "tesoura") { 
//         return ("Você Ganhou!"); 
//     } else if (computador == "papel"){ 
//         return ("Você Perdeu!"); 
//     } else if (computador == "pedra") { 
//         return("Empate"); 
//     } }


//     if (jogador == "tesoura") {
//          if (computador == "pedra") {
//               return ("Você perdeu"); 
//         } else if (computador == "papel"){ 
//             return ("Você Ganhou"); 
//         } else if (computador == "tesoura") {
//              return ("Empate"); 
//         } 
//     } 
    
//     if (jogador == "papel"){ 
//         if (computador == "pedra") { 
//             return("Você Ganhou"); 
//         }else if (computador == "tesoura") { 
//             return("Você Perdeu"); 
//         }else if (computador == "papel") { 
//             return ("Empate"); 
//         } 
//     }
    
// } 

// Débora - Você ganhou paçoquinha :)
// function pedraPapelTesoura(jogador1, jogador2) {
//     if (jogador1 == 'pedra' && jogador2 == 'pedra') {
//         return 'Empate';
//     } else if (jogador1 == 'pedra' && jogador2 == 'papel') {
//         return 'Você perdeu';
//     } else if (jogador1 == 'pedra' && jogador2 == 'tesoura') {
//         return 'Você venceu';
//     } else if (jogador1 == 'papel' && jogador2 == 'papel') {
//         return 'Empate'
//     } else if (jogador1 == 'papel' && jogador2 == 'tesoura') {
//         return 'Você perdeu'
//     } else if (jogador1 == 'papel' && jogador2 == 'pedra') {
//         return 'Você venceu';
// }
// }


// Pedra - Papel - Tesoura    Jogador   Computador   
// Resultado esperado

console.log(pedraPapelTesoura('pedra', 'pedra')) // Empate 
console.log(pedraPapelTesoura('pedra', 'papel')) // Você perdeu
console.log(pedraPapelTesoura('pedra', 'tesoura')) // Você venceu

console.log(pedraPapelTesoura('papel', 'papel'))// Empate
console.log(pedraPapelTesoura('papel', 'tesoura')) // Você perdeu
console.log(pedraPapelTesoura('papel', 'pedra')) // Você venceu

console.log(pedraPapelTesoura('tesoura', 'tesoura')) // Empate
console.log(pedraPapelTesoura('tesoura', 'pedra')) // Você perdeu
console.log(pedraPapelTesoura('tesoura', 'papel')) // Você venceu

