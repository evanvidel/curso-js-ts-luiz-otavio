const paragrafos = document.querySelector('.paragrafos');

const ps = document.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body)
const backgroundColoBody = stylesBody.backgroundColor

console.log(backgroundColoBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColoBody
  p.style.color = "#fff"
}
