/*
 * Exercícios realizados durante o módulo de DOM Para Iniciantes
*/

//=========================================================================
/* Exercício 001  */

// Retorne no console todas as imagens do site
const imgs = document.getElementsByTagName('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsFilter = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgsFilter);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[lastP.length - 1]);

//=========================================================================
/* Exercício 002  */

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((p) => {
  console.log(p);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((p) => {
  console.log(p.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

//=========================================================================
/* Exercício 003  */

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const firstItemMenu = itensMenu[0];
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
firstItemMenu.classList.add('ativo');
console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img, i) => {
  if (!img.hasAttribute('alt')){
    console.log(`${i} - Não possui alt Text`);
  } else {
    console.log(`${i} - Possui alt Text`);
  }
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://github.com/Lucas-HMSC')

//=========================================================================
/* Exercício 004  */

// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somarImagens() {
  const imgs = document.querySelectorAll('img');
  let larguraAll = 0;
  imgs.forEach((img) => {
    larguraAll += img.offsetWidth;
  });
  console.log(larguraAll);
}
window.onload = () => {
  somarImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link, i) => {
  if (link.offsetHeight >= 48 && link.offsetWidth >= 48){
    console.log(`${i} - possui o minimo recomendado`);
  } else {
    console.log(`${i} - não possui o minimo recomendado`);
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const janelaBrowser = window.matchMedia('(max-width: 720px)').matches;
if (janelaBrowser){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
  console.log(menu);
}

//=========================================================================
/* Exercício 005  */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event){
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo');
  console.log(linksInternos);
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.body;

function handleBody(event) {
  console.log(event.target);
}

elementos.addEventListener('click', handleBody);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleBodyRemove(event) {
  event.preventDefault();
  event.target.remove();
}

elementos.addEventListener('click', handleBodyRemove);

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentaTexto(event) {
  if (event.key === 't'){
    document.documentElement.classList.toggle('textomaior');
  }
}

elementos.addEventListener('keydown', aumentaTexto);

//=========================================================================
/* Exercício 006  */

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('.faq-lista dt');
console.log(firstDt);

// Selecione o DD referente ao primeiro DT
const nextDt = firstDt.nextElementSibling;
console.log(nextDt);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.outerHTML;
console.log(animais);