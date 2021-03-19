// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let number1 = 8;
let number2 = 4;

// Comparação entre variáveis, retornando a de maior valor.
let compare = (number1 > number2) ? number1 : number2;
console.log(compare);

// Outra opção para essa mesma função seria a descrita abaixo;
if (number1 > number2) {
  console.log(number1)
} else {
  console.log(number2)
}