const anoAtualSpan = document.querySelector("#anoAtual");
if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}
const ultimaModificacaoSpan = document.querySelector("#UltimaModificacao");
if (ultimaModificacaoSpan){
    ultimaModificacaoSpan.textContent = document.lastModified;
}

const hamburguerElement = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');

if (hamburguerElement && navElement){
    hamburguerElement.addEventListener('click', ()=>{
        navElement.classList.toggle('open');
        hamburguerElement.classList.toggle('open');
});
}
