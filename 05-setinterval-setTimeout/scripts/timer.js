function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // 01/01/1970 
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' // pra n ficar 21h
    });
}

const hudTimer = document.querySelector('#hudRelogio');
const btnIniciar = document.querySelector('#iniciarButton');
const btnPausar = document.querySelector('#pausarButton');
const btnZerar = document.querySelector('#zerarButton');


let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        hudTimer.innerHTML = getTimeFromSeconds(segundos) // aparece formatado puxando a função
    }, 1000);
}

btnIniciar.addEventListener('click', function (event) {
    clearInterval(timer)
    iniciaRelogio() 
});

btnPausar.addEventListener('click', function (event) {
    clearInterval(timer)
});

btnZerar.addEventListener('click', function (event) {
    clearInterval(timer)
    hudTimer.innerHTML = '00:00:00';
    segundos = 0

});


function temporizador() {
    let hour = new Date(0, 0, 0, 0);
    return hour.toLocaleTimeString('pt-BR')
}


function iniciarTime() {
    const time = setInterval(function () {
        console.log(temporizador())

    }, 1000)
    return time

}

// selecionar os elementos (botões e a hud)

