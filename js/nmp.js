function onSubmitPodataka(){
    let nasaforma = document.forms["nasa forma"]["username"];
    let usernameInputValue = usernameInput.Value
    if(usernameInputValue == ""){
        alert('ne moze');
        return false;
    }

    let passwordInput = document.forms["nasaForma"]["lozinka"];
    let passwordInputValue = passwordInput.Value;
    if(passwordInputValue = ""){
        alert("unesi i lozinku");
        return false;
    }
}



//kreirati formu 
//kreirati dunkciju onsubmitbroj i ne dozvoliti prazan unos broja a takodjer ne dozvoliti unos broja vece od 23


