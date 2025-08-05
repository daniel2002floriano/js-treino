const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

// Node list é bem parecido com array, podendo aceder pelo índice
// ver o tamanho com .length e percorrer com for...of ou .forEach()
// Não tem todos os métodos de um array, como o map, filter e reduce


// getComputedStyle() retorna TODOS os estilos aplicados a um elemento
const estiloBody = getComputedStyle(document.body);

// Extrai apenas a cor de fundo do objeto de estilos
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody)


// for...of - percorre diretamente os VALORES de estruturas iteráveis (arrays, NodeLists, etc)
// Diferente do for...in que percorre os ÍNDICES/CHAVES
for (let valor of p) {
    console.log(valor)
    valor.style.backgroundColor = backgroundColorBody;
    valor.style.margin = '10px';
    valor.style.borderRadius = '10px';
    valor.style.color = '#ffffff';
    // Mesma coisa que você adicionar o style dentro do arquivo html

    // Note: propriedades CSS com hífen (background-color) usam camelCase no 
    // JavaScript (backgroundColor)

}


