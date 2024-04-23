/**
 * Estruturas condionais
 * if else e else if
 * if só pode ser usado sozinho
 * Sempre que utilizo a palavra else , presiso de um if antes
 * eu posso ter vários else ifs na checagem
 * so posso ter um else na checagem
 */
/* const hora = 10;

if(hora >= 0 && hora <= 11) {
    console.log('Bom Dia');
}else if(hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
}else if(hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
}else{-
    console.log('Olá');
} */

/* const tenhoGrana = NaN 

if(tenhoGrana) {
console.log("Vou saia de casa");
}else{
    console.log("Não vou saia de casa");
    //ao encontrar uma afirmação true o código para - 'se for no mesmo escopo'
}

 */
const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log('O numeo esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
  console.log('O numeo esta entre 6 e 8.');
} else if (1 === 1) {
  console.log('Litaral'); //Verdadeira
} else if (numero >= 9 && numero <= 11) {
  console.log('O numeo esta entre 9 e 11'); //verdadeira
} else {
  console.log('O numeo esta entre 0 e 11.');
}

/**
 * @important
 * se a qualquer momento for adicionado uma codição verdadeira
 * independente para a aplicação e retorna o valor
 */
