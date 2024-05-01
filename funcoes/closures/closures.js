function retornaFunction(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFunction('Luiz');
const funcao2 = retornaFunction('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
