/**
 * Avaliação de curto circuito
 * && false ou true -> false "O valor mesmo"
 * || true ou False -> vai retornar o valor verdadeiro
 */

/* unction falaOi() {
  return "Oi";
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());
 */
console.log(0 || false || null || "Luiz Otavio" || true); //retorna o primeiro valor verdadeiro

const corUsuario = null; //
const corPadrao = corUsuario || "Preto";

console.log(corPadrao);

const corUsuario1 = "vermelha"; //primeiro valor verdadeiro
const corPadrao1 = corUsuario1 || "Preto";

console.log(corPadrao1);

const a = 0;
const b = null;
//const c = 'false';
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // se c for 'false'(string) será retornado
