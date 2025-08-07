// continue e break pode ser usado em laços
// continue → pula para o próximo ciclo do laço
// break → encerra o laço na hora


// while = verifica primeiro, age depois.

/* while (condição) {
  // Este bloco de código só executa ENQUANTO a condição for verdadeira.
} */

// do while = age primeiro, verifica depois

/* do {
  // Este bloco de código executa PELO MENOS UMA VEZ.
} while (condição);
 */

const nome = 'daniel';

const frutas = ['banana', 'pera', 'uva', 'morango', 'maçã']
let i = 0;

// while (i < nome.length) {
//     console.log(nome[i])
//     i++
// }


function random(min, max) {
    const r = Math.random() * ((max /*+ 1*/) - min) + min;
    return Math.floor(r);
}

// function meta() {
//     let valores = []
//     let rand = random(1, 50)
//     let tentativas = 0;
//     while (rand !== 50) {
//         rand = random(1, 50)
//         ++tentativas
//         valores.push(rand)
//     }
//     console.log(valores)
//     return console.log(`Numero ${rand} encontrado com ${tentativas} tentativas`)

// }

// meta()

/*
const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}
*/

// while enquanto

// do = faça // while = enquanto


const numeros = [1,2,3,4,5,6,7,8,2,3,4,5,]

for (let valor of numeros) {
        if (valor === 2 || valor === 5 || valor === 3) {
        continue;
    }
    console.log(valor)
}