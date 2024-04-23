/**
 * Avaliação de curto circuito
 * && false ou true -> false "O valor mesmo"
 * || true ou False -> vai retornar o valor verdadeiro
 *
 * FALSY = que podem ser falso
 * false
 * 0
 * '' "" `` strings vázias
 * null /undefined
 * NaN
 */
/**
 * Depois do && retornar falso ou verdadeira, se tiver mais expressões retorna a ultima
 * que for verdadeira, de acordo com o exemplo abaixo.
 */
/* console.log('Luiz otavio' && undefined && 'Maria'); //undefined
console.log('Luiz otavio' && 'qualquer coisa' && 'Maria'); //Maria
console.log('Luiz otavio' && NaN && 'Maria'); // NaN
 */
/* function falaOi() {
  return 'Oi';
}

const vaiExecutar = 'joaõzinho';

console.log(vaiExecutar && falaOi()) 
console.log(vaiExecutar === falaOi()) 
console.log(vaiExecutar || falaOi()) 
console.log(vaiExecutar === falaOi())  */

//  || ou - retorna o primeiro valor verdadeiro
console.log(0 || false || null || 'Luiz Otávio' || true);

//exemplos práticos
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'Preta';

console.log(corPadrao);
console.log(corPadrao2);

const a = 0;
const b = null;
const c = 'false'; //exibir
const d = false;
const e = NaN;

//caso todas sejam flasa retorna a ultima

console.log(a || b || c || d || e);
