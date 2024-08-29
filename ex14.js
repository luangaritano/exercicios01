const prompt = require('prompt-sync')();


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let user = Number(prompt("Informe um número: "));
let resultado = 1;


for(i = 1 ; i <= user ; i++ ){
    
    resultado *=  i;
   

}
    

console.log(resultado)