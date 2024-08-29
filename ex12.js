const prompt = require('prompt-sync')();


// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.


let user = Number(prompt("Informe o número que quer realizar a tabuada: "));

for (let cont = 1; cont <= 10; cont++) {
    console.log(`${cont} * ${user} =`, cont * user);
}