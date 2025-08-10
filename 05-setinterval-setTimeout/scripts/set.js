// Controlar timers

function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// setInterval executa uma função repetidamente a cada X milissegundos
// 1000ms = 1 segundo
const timer = setInterval(function () {
    console.log(mostraHora()); 
}, 1000); // Executa a cada 1 segundo

setTimeout(function () {
    clearInterval(timer);
}, 5000); // 5seg


setTimeout(function () {
    console.log('Teste a cada 2seg');
}, 2000);


// setInterval
// Espera uma função como argumento
// Não o resultado da função


console.log(mostraHora());