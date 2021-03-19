
//criando um array
var frutas = ["maçã", "banana", "abacaxi"];

console.log(frutas.length);

//acessar um indice do array
var primeiro = frutas[0];
console.log(primeiro);

var ultimo = frutas[frutas.length - 1];
console.log(ultimo);

//iterar um array
frutas.forEach(function (item, indice, array) {
  console.log(item, indice);
})

//adicionar um item ao final do array
var adicionar = frutas.push("laranja");
console.log(frutas);

//remover um item ao final do array
var ultimo = frutas.pop();
console.log(ultimo);
console.log(frutas);

//remover item no inicio do array;
var primeiro = frutas.shift();
console.log(primeiro);
console.log(frutas);

//adicionar ao inicio do array;
var adicionar2 = frutas.unshift("Morango");
console.log(frutas[0]);
console.log(frutas);

//identificar posição de item no indice do array;
var pos = frutas.indexOf("abacaxi");
console.log(pos);

//remover item de acordo com a posição;
var removedItem = frutas.splice(2, 1);
console.log(removedItem);

var copiar = frutas.slice();
console.log(copiar);
console.log(frutas);

let x = 6;
for (i = 1; i <= 9; i += 1) {
  console.log("");
  console.log(x + " x " + i + " = " + (x*i));
}

let listaDeNomes = ["João", "Ilan", "Maria", "Juvenal"]
for (indice = 0; indice < listaDeNomes.length; indice += 1) {
  let mensagem = "Boas vindas " + listaDeNomes[indice] + "!";
  console.log(mensagem);
}