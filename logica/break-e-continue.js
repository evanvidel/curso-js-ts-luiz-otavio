const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log('pulei o numero 2');
    continue;
  }
  if (numero === 5) {
    console.log('pulei o numero 5');
    continue;
  }

  if (numero === 7) {
    console.log("Não executei o 7");
    break;
  }

  console.log(numero);
}
