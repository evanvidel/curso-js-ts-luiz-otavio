let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

/* const varTempA = varA
varA = varB; // B
varB = varC; // C
varC = varTempA; // A */
//console.log(varA, varB, varC + " primeira resposta");

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC );
