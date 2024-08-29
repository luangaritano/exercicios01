const prompt = require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.


let user = Number(prompt("Informe um número inteiro: "));

if(user % 2 == 0){
    console.log("Este número é par")

} else{

    console.log("Este número é impar")

}