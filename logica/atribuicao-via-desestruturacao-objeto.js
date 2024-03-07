const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Avenida Brasil",
    numero: 320,
  },
};

//atribuição via desestruturação
//const { nome, sobrenome } = pessoa;
/* const {
  endereco: { rua: r, numero },
  endereco,
} = pessoa;
//console.log(nome,sobrenome);
console.log(r, numero, endereco); */

const {nome, ...resto} = pessoa;

console.log(nome,resto);
