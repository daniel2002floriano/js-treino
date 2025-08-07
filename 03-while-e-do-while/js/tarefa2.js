// Escreva uma função chamada ePaisagem que recebe
// dois argumentos, largura e altura de uma imagem (number)
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(x, y) { // parâmetros
    return x > y;
    // `Paisagem ${x}x${y} true` : `Retrato ${x}x${y} false`
}


const ePaisagem2 = (x, y) => x > y;

console.log(ePaisagem(1024, 768)) // argumentos aqui
console.log(ePaisagem2(1366, 768)) // argumentos aqui 