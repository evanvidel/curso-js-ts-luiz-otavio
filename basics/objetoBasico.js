const pessoa1 = {
  nome: 'Evangelista',
  sobrenome: 'Franco',
  idade: 25,

  //metodo
  fala() {
    console.log(
      ` A minha idade atual é: ${this.idade} Meu nome é: 
       ${this.nome} ${this.sobrenome} e eu estou falando oi...`
    );
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/* //função fabrica de objetos (factory) com parametros
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 45);
const pessoa3 = criaPessoa('João', 'Guedes', 37);
const pessoa4 = criaPessoa('Júnior', 'Alves', 98);
const pessoa5 = criaPessoa('Jean', 'Medeiros', 67);

console.log(pessoa1, pessoa2); */

/* const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
}
const pessoa2 = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 25
}

//anotação ponto
console.log(pessoa1.nome); 
console.log(pessoa1.sobrenome); 
console.log(pessoa2.nome);  */
