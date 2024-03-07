/**
 * Não podemos criar constante  com palavras reservadas
 * Variáveis precisam ter nomes significativos
 * Não pode começar o nome da constante com um número
 * Não pode conter espaços ou traços
 * Utilizamos camelCase
 * Case-sensitive(itentifica maiúsculas e minúsculas)
 * Não podemos modificar o valor das constantes
 * NÃO UTILIZE VAR , UTILIZE CONST
 */

const nome = "Joaão";

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3 
resultadoTriplicado = resultadoTriplicado + 5

console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(resultado);
console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero);