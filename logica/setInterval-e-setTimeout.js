function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

function funcaoDoInterval() {
  console.log(mostrarHora());
}

const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
  console.log('tenha um bom dia ');
}, 10000);
