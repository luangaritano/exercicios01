const prompt = require('prompt-sync')();


// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

const num = 10;

let a = 0;
let b = 1;

for (let i = 2; i < num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
