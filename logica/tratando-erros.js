/**
 * try = tentar
 * catch = capturar, apanhar
 */
/* try {
  console.log(naoExisto);
} catch (error) {
    console.log("nãoExisto não existe");
    console.log(error.message);
}
 */

/* function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y  precisam ser numeros');
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma('1', 2));
} catch (error) {
  console.log('Error: ' + error.message);
}

try {
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei um arquivo');
  try {
    console.log(b);
  } catch (error) {
    console.log('deu erro');
  } finally {
    console.log('Tambem sou finally');
  }
} catch (error) {
  console.log('tratando erro');
} finally {
  console.log('FYNALLY: Eu sempre sou executado');
}
 */

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date');
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}
try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(data);
  console.log(hora);
} catch (error) {
  // trata error
} finally {
  console.log('tenha um bom dia ');
}

const hora = retornaHora();
console.log(hora);
