const currentYearSpan = document.querySelector("#currentyear");
const UltimaModificacaoSpan = document.querySelector("#UltimaModificacao");

const today = new Date();
currentYearSpan.textContent = today.getFullYear();
UltimaModificacaoSpan.textContent = document.UltimaModificacao;

const hamburguerElement = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');

hamburguerElement.addEventListener('click', ()=>{
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});

