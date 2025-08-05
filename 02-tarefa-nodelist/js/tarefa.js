// Desafio JavaScript
// Selecione todos os elementos <li> usando querySelectorAll
// Use getComputedStyle para pegar a cor do texto do h1
// Use for...of para percorrer cada <li> e aplicar:
// A cor do h1 como background dos <li>
// Padding de 15px
// Margin-bottom de 8px
// Border-left de 4px solid #28a745
// Cursor pointer


// usar a cor do H1 como background dos Li


// manipula o h1 pegando sua cor
const container = document.querySelector('.container') // melhora o escopo
const selecionaH1 = container.querySelector('h1'); // seleciona o primeiro  elemento h1
const estiloH1 = getComputedStyle(selecionaH1); 
const corTextoH1 = estiloH1.color;


const divTarefa = container.querySelector('.lista-tarefas') // melhora o escopo
const liTarefa = divTarefa.querySelectorAll('li');


for (let valor of liTarefa) {
    valor.style.background = corTextoH1; // pega cor do H1 e coloca no Background dos Li
    valor.style.padding = '15px';
    valor.style.marginBottom = '8px';
    valor.style.borderLeft = '4px solid #28a745'
    valor.style.cursor = 'pointer';
}



