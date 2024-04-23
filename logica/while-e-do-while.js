/* const nome = 'Luiz';

let i = 0;

/* while (i <= 10) {
  console.log(i);
  i++;
} */

/* while (i < nome.length) {
    console.log(nome[i]);
    i++;
}
console.log('segue a vida...');
 */

function randon(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10

while (rand !== 10) {
  rand = randon(min, max);
  console.log(rand);
}

console.log("#######");

do {
  rand = randon(min, max);
  console.log(rand);
} while (rand !== 10);
