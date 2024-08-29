const prompt = require('prompt-sync')();

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.



let user = Number(prompt("Selecione uma opção de 1 até 3: "));


switch(user){
   case 1:
       console.log("Você selecionou a primeira opção")
       break
    case 2: 
       console.log("Você selecionou a segunda opção")
       break 
    case 3: 
       console.log("Você selecionou a terceira opção")
        break  
    default:
       console.log("Você não escolheu nenhuma opção")  
}
