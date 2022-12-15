const time_el = document.querySelector(".watch .time ");
const start_btn = document.getElementById("iniciar");
const reset_btn = document.getElementById("cancelar");
const stop_btn = document.getElementById("iniciar");





let seconds = 700;
let interval = null;


start_btn.addEventListener("click", start,stop);
reset_btn.addEventListener("click", reset);


function timer() {
    seconds--;


    let hrs =  Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60; 

    if(seconds === 0)
   	{
		clearInterval(seconds);
                alert("Acabou o tempo!!!");
        }

    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins; 
    if (secs < 10) secs = '0' + secs;    

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}


function buttonFunction(){
    var btn = document.getElementById("iniciar");

    if (btn.value == "Iniciar") {
        btn.value = "Pausar";
        btn.innerHTML = "Pausar";
    }
    else{
        btn.value = "Iniciar";
        btn.innerHTML = "Iniciar";
    }
    if (btn.value == "Pausar"){
        clearInterval(interval)
        interval = null;
    }


}


function start () {
if
     (interval){
        return
    }
    interval = setInterval(timer, 1000);
   
    
}

function reset () {
    stop();
    seconds = 0;
    clearInterval(interval)
    interval = null;
    time_el.innerText = "00:00:00";
}

function stop () {
    clearInterval(interval)
    interval = null;

    }
