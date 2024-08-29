const prompt = require('prompt-sync')();

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let qtd = Number(prompt("Informe a qtd de maças compradas: ")); 
let preco1 = 0.35
let preco2 = 0.25
let valorTotal = 0

if(qtd <= 11){
    valorTotal = qtd * preco1

}else if (qtd >= 12){

    valorTotal = qtd * preco2
}

console.log(`valor total da compra é: R$ ${valorTotal.toFixed(2)}`)