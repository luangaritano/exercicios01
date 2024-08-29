const prompt = require('prompt-sync')();

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

let user = Number(prompt("Informe uma idade: "));


if(user <= 12){
    
    console.log("Está pessoa é uma criança!")

} else if(user > 12 && user <= 17 ){
    
    console.log("Está pessoa é adolescente!")

} else if(user >= 18 && user <= 59){

    console.log("Está pessoa é adulta!")

} else {

    console.log("Está pessoa é idosa!")
}
