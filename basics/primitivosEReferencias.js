/***
 * Tipos de dados Primitivos(imutáveis) - string , number , boolean, undefined, null, (bigint, symbol)
 */
/* let nome = "Luiz";
nome = "Otávio";
console.log(nome);
 */

/* let a = "A";
let b = a;
console.log(a, b);

a = 'outra coisa'
console.log(a, b); */

//Referencia (mutável) - array , object ,function

/* let a = [1,2,3]
let b = [...a]
let c = b
console.log(c);
a.push(4)
console.log(a, b);
a.pop()
console.log(a, b);

a.push('Luiz')
console.log(c);  */

const a = {
    nome: 'Luiz',
    sobrenome: "Otavio"
}
const b = {...a}
a.nome = 'João'
console.log(b);
console.log(a);