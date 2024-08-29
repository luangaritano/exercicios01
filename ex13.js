const prompt = require('prompt-sync')();

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.


let soma = 0;
let user; 


while(user !== 0){

    user = parseFloat(prompt("Informe um número decimal: "));
    soma += user;
}
    

console.log(soma)