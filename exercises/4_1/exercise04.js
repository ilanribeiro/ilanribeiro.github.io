// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

//Variável definida;
let value = 30;

//testando variável para "positive", "negative" ou "zero":
let result = (value > 0) ? "Positive" : (value === 0 ? "Zero" : "Negative");
console.log(result)