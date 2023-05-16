function ucitajPodatke() {

    const call = new XMLHttpRequest();

    call.onreadystatechange = function() {
        if(call.readyState === 4) {
            const odgovor = call.responseText;
            console.log(odgovor);
        }
    }
    call.open("GET",'https://jsonplaceholder.typicode.com/posts',true); 
call.send();
}

ucitajPodatke();

 