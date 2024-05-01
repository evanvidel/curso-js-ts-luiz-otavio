//funções fabrica = Factory Function

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    /* nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }, */
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala(assunto) {
      return `${this.nome} esta ${assunto}.`;
    },
    altura: a,
    peso: p,
    //Função
    /*  imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    }, */
    //Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Aguinelo', 1.6, 70);
const p3 = criaPessoa('Junio', 'Alves', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

/* p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome); */

//console.log(p1.nomeCompleto());
/* console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
console.log(p1.imc); */

/* const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.imc());
console.log(p1.fala('falando sobre Js'));
console.log(p2.fala('falando sobre Js')); */
