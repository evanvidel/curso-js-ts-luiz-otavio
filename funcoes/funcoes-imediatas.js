/**funções imediatas
 * IIFE => Immediately invoked function expression
 */
/* function qualquerCoisa() {
  console.log(1112345789);
}
qualquerCoisa();
 */

/* (function () {
    const nome = 'Luiz';
  console.log(nome);
})();
 */
(function (idade, peso, altura) {
  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);
