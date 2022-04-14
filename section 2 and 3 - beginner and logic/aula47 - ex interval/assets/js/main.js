function clock(){
    function getTimeFromSeconds(segundos) {
        return new Date(segundos * 1000).toLocaleTimeString('pt-BR', {hour12: false, timeZone: "GMT"});
    }
    
    let segundos = 0;
    let timer;
    
    function startClock(){
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
            relogio.style.color = 'black';
        }, 1000);
    }
    
    function pauseClock(){
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    
    function stopClock(){
        clearInterval(timer);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
        
        if (el.id === 'start'){
            clearInterval(timer);
            segundos = 0;
            startClock();
        } else if (el.id === 'pause'){
            pauseClock();
    
        } else if (el.id === 'stop'){
            stopClock();
            segundos = 0;
            relogio.innerHTML = getTimeFromSeconds(0);
            relogio.style.color = 'black';
        } 
        
    });
}

clock();