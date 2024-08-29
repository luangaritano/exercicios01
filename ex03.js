const prompt = require('prompt-sync')();

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


 let user = Number(prompt("Informe uma nota de 1 a 10: "));

 if(user >= 7){
    
    console.log("Você está aprovado!")

 } else if (user >= 4 && user <= 6){

    console.log("Você está de recuperação!")

 } else {

    console.log("Você está reprovado!")

 }