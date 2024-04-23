// for in ler os indices ou chaves do objeto

const frutas = ['pera', 'Maça', 'Uva'];

for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 34,
};

const chave = 'nome';

console.log(`pegando a chave ${chave}`);

for (const key in pessoa) {
  console.log(key, pessoa[key]);
}

/* console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let i in pessoa) {
  console.log(pessoa[i]);
} */

/* for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
 */
