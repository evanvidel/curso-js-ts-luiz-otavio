//            01234567899  - espaço também conta como indice
const nome = 'Luiz Otávio'
//                0        1        2
const alunos = ['Luiz', 'maria', 'João']

console.log(typeof alunos); //objeto 
console.log(alunos instanceof Array); //true

// alunos.push('Luiza')
// alunos.push('Eduardo')

// console.log(alunos.slice(0,3));
// console.log(alunos.slice(0, -1));
//console.log(alunos[50]);//undefined

//delete alunos[1] //deixa indice vazio - <1 empty item>

//const removido = alunos.pop() //remove o ultimo item
// const removido = alunos.shift() //remove o primeiro item
// console.log(removido); //item removido

// alunos.unshift('Luiza') // adiciona no começo
// alunos.unshift('Fábio') // adiciona no começo

// alunos.push('Luiza')// adiona no fim
// alunos.push('Fábio')// adiona no fim

// alunos[alunos.length] = 'Luiza'
// alunos[alunos.length] = 'Fabio'
// alunos[alunos.length] = 'Luana'
// console.log(alunos);

// alunos[3] = 'Luiza' //adicionando
// alunos[0] = 'Eduardo' //modificando
// console.log(nome[4]);
// console.log(alunos[0]);