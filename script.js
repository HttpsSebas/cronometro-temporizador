const cronometroDisplay = document.getElementById('cronometro-display');
const startCronometroBtn = document.getElementById('start-cronometro');
const pauseCronometroBtn = document.getElementById('pause-cronometro');
const stopCronometroBtn = document.getElementById('stop-cronometro');

const temporizadorInput = document.getElementById('temporizador-input');
const startTemporizadorBtn = document.getElementById('start-temporizador');
const pauseTemporizadorBtn = document.getElementById('pause-temporizador');
const stopTemporizadorBtn = document.getElementById('stop-temporizador');

let cronometro;
let temporizador;
let temporizadorTiempo;

function startCronometro(){
    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    cronometro = setInterval(function(){
        segundos++;
        if(segundos === 60){
            segundos = 0;
            minutos++;
            if(minutos === 60){
                minutos = 0;
                horas++;
            }
        }
        cronometroDisplay.innerText =
        (horas < 10 ? "0" + horas : horas) + ":" + 
            (minutos < 10 ? "0" + minutos : minutos) + ":" + 
            (segundos < 10 ? "0" + segundos : segundos); 
    }, 1000);
}

function pauseCronometro(){
    clearInterval(cronometro);
}

function stopCronometro(){
    clearInterval(cronometro);
    cronometroDisplay.innerText = "00:00:00"
}

function startTemporizador(){
    let tiempo = temporizadorInput.value.split(":");
    let horas = parseInt(tiempo[0]);
    let minutos = parseInt(tiempo[1]);
    let segundos = parseInt(tiempo[2]);

    temporizadorTiempo = horas * 3600 + minutos * 60 + segundos;

    temporizador = setInterval(function(){
        segundos--;

        if(segundos < 0){
            minutos--;
            segundos = 59;
            if(minutos < 0){
                horas--;
                minutos = 59;
            }
        }
        if(segundos === 0 && minutos === 0 && horas === 0){
            clearInterval(cronometro);
        }

        temporizadorInput.value = (horas < 10 ? "0" + horas : horas) + ":" + 
        (minutos < 10 ? "0" + minutos : minutos) + ":" + 
        (segundos < 10 ? "0" + segundos : segundos); 
    }, 1000);
}

function pauseTemporizador(){
    clearInterval(temporizador);
}

function stopTemporizador(){
    clearInterval(temporizador);
    temporizadorInput.value = "";
}


startCronometroBtn.addEventListener("click", startCronometro);
pauseCronometroBtn.addEventListener("click", pauseCronometro);
stopCronometroBtn.addEventListener("click", stopCronometro);

startTemporizadorBtn.addEventListener("click", startTemporizador);
pauseTemporizadorBtn.addEventListener("click", pauseTemporizador);
stopTemporizadorBtn.addEventListener("click", stopTemporizador);