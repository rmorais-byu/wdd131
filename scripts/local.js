const currentYearElement = document.querySelector("#currentyear");
if (currentYearElement){
    currentYearElement.textContent = `Última modificação: ${document.lastModified}`;

}


const temperatura = 8;
const velocidadeVento = 10;

const elementoSensacao = document.querySelector("#weather");


if (elementoSensacao){
    if (temperatura <= 10 && velocidadeVento > 4.8){
        const sensacao = calcularSensacaoTermica (temperatura, velocidadeVento);
        elementoSensacao.textContent = `${sensacao} °C`;
    } else{
        elementoSensacao.textContent = "N/A";
    }
}