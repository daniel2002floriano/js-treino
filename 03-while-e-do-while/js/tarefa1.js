// Tarefa 1
// Escreva uma função que recebe 2 numeros e retorne o maior deles
function maiorN(x, y) {
    return x > y ? x : y
}


// const maiorN2 = (x, y) => {
//     return x > y ? x : y
// }
// encurtando
const maiorN2 = (x, y) => x > y ? x : y 
// 1 linha da pra tirar as chaves e o return


console.log(`MaiorN = ${maiorN(4, 8)}`);
console.log(`MaiorN2 = ${maiorN2(-5, 50)}`)

