/* const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
//array = 'Outra' //Assignment to constant variable, porque é const
console.log(array);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25,
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
 */
/* function criaPessoa(nome, sobrenome, idade) {
  return { nome,sobrenome,idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25) //argumentos
const pessoa2 = criaPessoa('Maria', 'Madalena', 25) //argumentos
const pessoa3 = criaPessoa('Eduardo', 'Gonçalves', 25) //argumentos
const pessoa4 = criaPessoa('Marcelo', 'Novais', 25) //argumentos
const pessoa5 = criaPessoa('Jessica', 'Alba', 25) //argumentos

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome); */

console.log("------ Objsto ------");
const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
    // Quando uma função esta dentro de um objeto é chamada de metodo
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala();
