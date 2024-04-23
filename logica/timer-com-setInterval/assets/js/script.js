function criaHoraDosSegudos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

console.log(criaHoraDosSegudos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function iniciarRelogio() {
  const timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegudos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function (e) {
  iniciarRelogio();
});

pausar.addEventListener('click', function (e) {
  relogio.innerHTML = 'cliquei no pausar';
});

zerar.addEventListener('click', function (e) {
  relogio.innerHTML = 'cliquei no zerar';
});
