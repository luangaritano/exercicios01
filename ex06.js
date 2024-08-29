const prompt = require('prompt-sync')();

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let ladoA = 32;
let ladoB = 33;
let ladoC = 34;

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){

    console.log("Os lados fornecidos formam um triângulo!")

} else {

    console.log("Os lados fornecidos não formam um triângulo!")

}

if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){

    console.log("Triângulo isósceles")

} else if(ladoA !== ladoB && ladoB !== ladoC){

    console.log("Triângulo escaleno")

} else if(ladoA == ladoB && ladoB == ladoC){

    console.log("Triângulo equilátero")
}