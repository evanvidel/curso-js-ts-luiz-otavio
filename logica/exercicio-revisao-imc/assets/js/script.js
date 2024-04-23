/**
 * Para capturar um formulario =  document.querySelector('#formulario')
 * addEventListener = adiciona o evento que desejo escutar
 * preventDefault() = evita que o formulário seja enviado (aberto em outro lugar)
 * createElement('p') = cria um elemento html
 * appendChild(p) = insere um elemento , um "filho"
 * p.classList.add('nome-da-class') == adiciona uma classe
 */

//Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso invalido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura invalido', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
  console.log(imc, nivelImc);
  // continua...
});

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'peso Normal',
    'Sobreppeso',
    'Obesidade Grau 1',
    ' Obesidade Grau 2',
    'Obesidade Grau 3',
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.9) return nivel[1];
  if (imc < 18.9) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
