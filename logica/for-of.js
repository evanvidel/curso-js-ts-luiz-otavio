//const nome = 'Luiz Otávio';
const nomes = ["Luiz", "Otávio", "Henrique"];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
}

/**
 * for classico - Geralnmente com interáveis (array ou strings)
 * for in - Retorna inde ou chave (string, array ou objatos)
 * for of - Retorna o valor em si (interáveis, arrays ou strings)
 */

/* for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
} */


//padrão
console.log(">>>>> for Padrão <<<<<<");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
//For in
console.log(">>>>> for in <<<<<<");
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log(">>>>> for of <<<<<<");

//for of
for (let valor of nomes) {
  console.log(valor);
}

console.log(">>>>> forEach <<<<<<");
nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
