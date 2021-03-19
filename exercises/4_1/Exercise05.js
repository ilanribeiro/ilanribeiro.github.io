// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

// Definição das variáveis;
let ang1 = 5;
let ang2 = 95;
let ang3 = 80;

// Teste das variáveis. Saber se pode ser triângulo;
if ((ang1 + ang2 + ang3) === 180) {
  let triangle = true;
  console.log(triangle)
} else {
  let triangle = false;
  console.log(triangle)
}

//outra forma de testar as variáveis para triângulo;
let triangle = ((ang1 + ang2 + ang3) === 180) ? true : false;
console.log(triangle);