function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000) // converte de mili pra seg
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('#hudRelogio');
const iniciar = document.querySelector('#iniciarButton');
const pausar = document.querySelector('#pausarButton');
const zerar = document.querySelector('#zerarButton');

let segundos = 0;
let timer;

function iniciaTime() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos)

    }, 1000); // 1 seg
};

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    iniciaTime();
    relogio.classList.remove('vermelho')
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('vermelho')

});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('vermelho')
});