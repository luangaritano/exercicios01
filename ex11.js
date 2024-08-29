const prompt = require('prompt-sync')();


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let soma = 0;


for(let cont = 1; cont <= 5; cont++){

    let num = Number(prompt("Informe um número inteiro: "));

    soma += num;
}

console.log(soma)