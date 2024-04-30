/**
 * Declaração de função (Function hoisting)
 * isso quer dizer que podemos declarar a função  tanto antes de cria-la
 * ou depois, conforme exemplo abaixo
 *
 */
falaOi();
function falaOi() {
  console.log('oie');
}

/**
 * as funções são:
 * First-class object (objetos de primeira classe)
 */

//Function expression = uma costante recebe uma função
const souUmDado = function () {
  console.log('sou um dado');
};
function executaFuncao(funcao) {
  console.log('vou executar sua função abaixo :D');
  funcao();
}

executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log('sou uma arrow function');
};
funcaoArrow();
// Dentro de um Objeto
const obj = {
  falar: function () {
    console.log('sou um objeto');
  },
};
// Dentro de um Objeto - maneira Atual
const obj2 = {
  falar() {
    console.log('sou um objeto da forma atual');
  },
};
obj2.falar();
