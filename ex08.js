const prompt = require('prompt-sync')();

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let valores = [];

let valor1 = Number(prompt("Informe um valor: ")); 

valores.push(valor1);

let valor2 = Number(prompt("Informe outro valor: ")); 

valores.push(valor2);

if ( valor1 == valor2) {
    console.log("Por favor, informe números que não sejam iguais");
    return;
}

console.log(valores.sort((a, b) => a - b));