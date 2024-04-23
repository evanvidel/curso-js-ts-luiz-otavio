const nomes = ['Luiz', 'Otavio', 'Henrique'];

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
};
/**
 * for clássico - Geralmente com iteráveis (arrays ou string)
 * for in - Retoena o indice ou chave (string, array ou objetos)
 * for of retorna o vlor em si (iteráveis, arrays ou string)
 */
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

/* for(let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
} */

/* for (let i in nomes) {
  console.log(`usando for in :)  ${nomes[i]}`);
} */
/* or (let valor of nomes) {
  //não precisa colocar indice[i]
  console.log(valor);
}

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
nomes.forEach((valor, indice) => {
  console.log(valor, indice);
});
 */
