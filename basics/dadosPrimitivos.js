//***Dados Primitivos:  String , number, undefined, null, boolean , symbol*/
const nome = "Luiz"; //string
const nome1 = "Luiz"; //string
const nome2 = "Luiz"; //string
const num1 = 19; //number
const num2 = 10.52; //number
let nomeDeAluno; //undefined -> não aponta para lugar nenhum na memória
const sobrenomeDeAluno = null; //null -> não aponta para lugar nenhum na memória
const aprovado = true; //true ->boolean -> true ou false

console.log(typeof nomeDeAluno);

// valores por referencia 
const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);

// valores copiados !=  valores por referencia
let a1 = 2
let b1 = a1

console.log(a1, b1)
a1 = 3
console.log(a1, b1)



