function startAnimation(){
    const maliKvadraticDiv = document.getElementById("maliKvadratic");
    let iznosPomjeraja = 0;
    let intervalPomjeraja = setInterval(frame,5);
    function frame(){
        if(iznosPomjeraja == 350){
            iznosPomjeraja = 0;
            clearInterval(intervalPomjeraja);
        }else{
            iznosPomjeraja++;
            maliKvadraticDiv.style.top = iznosPomjeraja + "px";
        }
    }
}