function onSubmitBroj(){
    let brojeniUnosInput = document.getElementById("brojevniUnos")
    let BrojevniUnos = brojeniUnosInput.value;
    let message = "";

    if (brojevniUnos<1 || brojevniUnos>23){
        message = "unijeli ste broj van opsega 1-23";

    }else{
        message = "jesi dobro ti"
    }
    let paragraf = document.getElementById("messageParagraf")
    paragraf.innerHTML = message;
}

