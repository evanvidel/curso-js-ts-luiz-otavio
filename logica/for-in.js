//const frutas = ["pera", "Maça", "Uva"];

/* for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
} */

//For in -> lê os indices ou chaves do objeto
/* for (let i in frutas) {
    console.log(frutas[i]);
} */

const pessoa = {
  nome: "Luiz",
  sobrenaome: "Otávio",
  idade: 30,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

/* //console.log(pessoa.nome);
const chave = 'nome'
console.log(pessoa[chave])

for(let chaves in pessoa){
    console.log(chaves);
} */
