//treba napraviti program koji ce uvijek prikayivati ime dana u sedmici na njemackom 

function switchFunkcion() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    switch (currentDay) {
        case 0:
            alert('Soontag');
            break;

        case 1:
            alert('Dienstag')
            break;

        case 2:
            alert('Mittwoch');
            break;

        case 3:
            alert('Donnerstag');
            break;

        case 4:
            alert('Freitag');
            break;

        case 5:
            alert('Samstag');
            break;


        case 6:
            alert('Sonntag');
            break;

    }
}


//korisnik unese na bosanskom jeyiku a prikayete mu na francuskom


function doAction(){
    let continentNAme = promt("Unesi");
    let continentNAmeCapsLock = continentNAme.toUpperCase();
    switch(continentNAmeCapsLock) //i sad dole ide case,alert i brake i tjt 
    }
    
}








