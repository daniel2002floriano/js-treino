// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)



const frutas = ['banana', 'maçã', 'pera', 'uva']

for (let valor in frutas) { // itera o índice
    console.log(valor)
}

for (let valor of frutas) {  // itera o valor
    console.log(valor)
}


const pessoa = {
    nome: 'daniel',
    idade: '23',
    altura: '1.65',
    peso: '55'
}

for (let valor in pessoa) {
    console.log(valor)
}

for (let valor of pessoa) {
    console.log(valor)
}
//dá erro porque, em JavaScript, objetos puros
//(como o objeto pessoa) não são "iteráveis" por padrão.

// EXPLICAÇÃO CONCEITUAL:
// for...of: Foi criado para percorrer estruturas iteráveis. A pergunta que ele faz é: 
// "Qual é o próximo item neste livro/fila?". Por isso, ele funciona perfeitamente 
// com o array frutas, mas dá um erro com o objeto pessoa, pois não sabe qual é 
// o "próximo item" de uma caixa de ferramentas.

// for...in: Foi criado para inspecionar as propriedades de objetos. A pergunta que ele faz é: 
// "Quais são as chaves/etiquetas nesta caixa de ferramentas?". Por isso, ele funciona 
// perfeitamente com o objeto pessoa (retornando nome, idade, etc.). Ele também funciona 
// com arrays porque, por baixo dos panos, arrays em JavaScript são um tipo especial 
// de objeto onde as "chaves" são os índices ("0", "1", "2"...).


