//escopo léxico
const nome = 'Carlos';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otavio';
  falaNome();
}

usaFalaNome();
