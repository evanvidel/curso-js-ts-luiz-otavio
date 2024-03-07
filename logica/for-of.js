//const nome = 'Luiz Otávio';
const nome = ['Luiz' ,'Otávio', 'Henrique'];

//padrão
console.log('>>>>> for Padrão <<<<<<');
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
 //For in
 console.log('>>>>> for in <<<<<<');
 for(let i  in nome) {
    console.log(nome[i]);
 }

 console.log('>>>>> for of <<<<<<');
 
 //for of 
 for(let valor of nome){
     console.log(valor);
    }
    
console.log('>>>>> forEach <<<<<<');
