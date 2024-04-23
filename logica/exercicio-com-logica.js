//Escreva uma função que receba 2 numeros e retorne o maior deles

function max(x, y) {
  /*  if(x > y) {
        return x;
    }else{
        return y
    } */
  /* if (x > y) return x;
  return y; */
  //return x > y ? x : y;
}

/* const max2 = () => {
  return x > y ? x : y;
}; */
/* const max2 = (x, y) => (x > y ? x : y);

console.log(max2(2, 4)); */

/**
 * Escreva uma função chamada  ePaisagem que recebe dois argumentos,
 * largura e altura de uma imagem (number).
 * retorne true se a imagem estiver no modo paisagem
 */
/* function ePaisagem(largura, altura) {
  return largura > altura;
} */

/* const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1920)); */

/**
 * Escreva uma função que receba um numero e retorne o seguinte:
 * número é divisível por 3 = Fizz
 * número é divisível por 5 = Buzz
 * numero é divisível por 3 e 5 FizzBuzz
 * numero Não é divisível por 3 e 5 = retorna o proprio numero
 * Checar se o número é realmente um número = retorna o proprio número
 * Use a função com número de 0 a 100
 */

function FizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}

console.log('a', FizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
