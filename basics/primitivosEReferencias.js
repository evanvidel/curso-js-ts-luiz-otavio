/***
 * Tipos de dados Primitivos(imutáveis)
 * - string , number , boolean, undefined, null, (bigint, symbol)
 */
/**@exemplo: o indice da string não muda */
// let nome = 'Luiz'
// nome[0] ='R' //numca muda
// console.log(nome[0], nome);

/* let nome = "Luiz";
nome = "Otávio";
console.log(nome);
 */
/* let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'outra coisa';
console.log(a, b);
 */
/* //Referencia (mutável) - array , object, function
let a = [1, 2, 3];
let b = a  
let c  = b
// b aponta para o mesmo valor, se a variavel b for modificada a também sera e vise versa
console.log(a, b);

a.push(4) //acrecenta valor
console.log(a, b);


b.pop(4) //deleta o ultimo valor
a.push('Luiz')


console.log(a, b);
console.log(c); */


let a = [1,2,3]
let b = [...a] //[...a] Spread Operator (faz uma copia de a nesse caso)
a.push('vanjo')
console.log(a, b);


// const a = {
//     nome: 'Luiz',
//     sobrenome: "Otavio"
// }
// const b = {...a}
// a.nome = 'João'
// console.log(b);
// console.log(a);
