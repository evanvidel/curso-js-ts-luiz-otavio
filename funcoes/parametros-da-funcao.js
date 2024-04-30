//função basica sem parametro
/* function funcao() {
  console.log('Oie ');
}
funcao();
 */

// arguments que sustenta todos os argumentos enviados: Não funciona em arrow function
/* function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, 1, 2, 3);
}
funcao(1, 2, 3, 4, 5, 6, 7);
 */
/* function funcao2(a, b, c, d, f, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3, 4, ); */
/* function funcao2(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao2(2, 10);
funcao2(2, '', 10);
funcao2(2, undefined, 10); */

function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 };
funcao3(obj);

function funcao4([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao4(['Luiz Otávio', 'Miranda', 30]);

const conta = function (operador, acumulador, /* ...numeros */ ...args) {
  // Rest Operations
  console.log(args);
  /* for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador); */
};
conta('+', 1, 20, 30, 40, 50);
conta('-', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
