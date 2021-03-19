// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

//Variáveis a serem comparadas
let n1 = 5;
let n2 = 40;
let n3 = 25;

//Comparação usando if.else
if (n1 < n3 && n2 < n3) {
  console.log(n3);
} else if (n3 < n2 && n1 < n2) {
  console.log(n2);
} else {
  console.log(n1);
}

//Usando operador ternário, acomparação entre as três variáveis ficaria dessa forma:
let result = (n1 < n3 && n2 < n3) ? n3 : (n3 < n2 && n1 < n2) ? n2 : n1;
console.log(result)

//Testando outra lógica de comparação
let result2 = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);
console.log(result2)

//Essa mesma lógica acima, utilizando o if.else ficaria assim:
if (n1 > n2) {
  if (n1 > n3) {
    console.log(n1);
  } else {
    console.log(n3);
  }
} else {
  if (n2 > n3) {
    console.log(n2);
  } else {
    console.log(n3)
  }
}