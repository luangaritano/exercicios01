const prompt = require('prompt-sync')();

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else. IMC = peso (kg) ÷ (altura x altura) (m)

let peso = Number(prompt("Informe seu peso(kg): ")); 
let altura = Number(prompt("Informe sua altura(m): ")); 
let resultado = (peso) / (altura*altura)

console.log("Seu Índice de Massa Corporal(IMC) é:", resultado); 


if(resultado <= 18.5){

    console.log("Abaixo do peso")

} else if(resultado > 18.5 && resultado <= 24.9){

    console.log("Peso normal")

} else if(resultado > 24.9 && resultado <= 29.9){
    
    console.log("Sobrepeso")

} else if(resultado > 29.9 && resultado <= 34.9){

    console.log("Obesidade grau 1")

} else if(resultado > 34.9 && resultado <= 39.9 ){

    console.log("Obesidade grau 2")
} else {

    console.log("Obesidade Mórbida")
}
