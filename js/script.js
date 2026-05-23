// Variáveis para linkar com as classes html
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');
let index = 0;

// Arrow function para mostrar o slide
function mostrarSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Navegação manual
btnDir.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
});

btnEsq.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarSlide();
});
