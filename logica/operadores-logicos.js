/**
 * Operadores Lógicos
 * && -> AND -> E - Todas as expressôes precisam ser verdadeiras para retornar true
 * || -> OR  ->  OU
 * ! -> NOT  -> NÂO
 */

//const expressaoAnd = true && true && true && true;
//const expressaoOr = true || false ;
//console.log(expressaoAnd);
//console.log(expressaoOr);
const usuario = "Luiz";
const senha = "123456";

const vaiLogar = usuario === "Luiz" && senha === "12345";
console.log(vaiLogar);

console.log(!true); //negação

console.log('Luiz Otávio' && true && 'Maria');

