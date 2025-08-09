// Erro


function subtrair(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log('Erro')
        throw new Error('X e Y precisam ser números.');
        // usado Error, mas tem vários tipos diferentes que se pode utilizar
        
    }

    return x - y;

}

try {
    console.log(subtrair(1, 2));
    console.log(subtrair('1', 2));
} catch (error) {
    console.log(error)
    console.log('Alguma coisa mais amigável para o usuário.');

}
