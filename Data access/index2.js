async function ucitaj(){
    console.log('zahtjev se salje')
    const odgovor = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsObjekat = JSON.parse(odgovor);
    
}

 