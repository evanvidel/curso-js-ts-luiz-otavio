// cada caractere é um indice

let umaString = "O rato roeu a roupa do rei de roma."

console.log(umaString[8]);//undefined
console.log(umaString.charAt(3));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m',3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/g));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2,6));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());