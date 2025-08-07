// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Não é divisível por ambos = retorne o próprio número

// Extra
// Checar se é um número (fazer ao contrário pra tornar mais prático)
// Use a função com números de 0 a 100


function fizzBuzz(x) {
    const div3 = x % 3 === 0
    const div5 = x % 5 === 0

    if (isNaN(x)) return `número inválido` 
    
    if(x < 0 || x > 100) return `n: ${x} digite um número entre 0 e 100`

    if (div3 && div5) return `${x} FizzBuzz`
    if (div3) return `${x} Fizz`
    if (div5) return `${x} Buzz`
    return `${x} não divisível`
}


console.log(fizzBuzz('3'))

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i))
}
