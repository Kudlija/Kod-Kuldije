class person{
    constructor(name,surname,JMBG,birthday){
        this.name= name;
        this.surname=surname;
        this.JMBG= JMBG;
        this.birthday=birthday;
    }
}

function dodajOsobu(){
    let personOne = new Person("Anel","Kovakevik",123,"01.01.01");
    let personTwo = new Person("Ibrahim" ,"mema",123,"02.02.02");
    let personThree = new Person("Meho","Puzo",123,"03.03.03");
    let personParagraf = document.getElementById("paragraph");
    let sadrzaj = personOne.present() + " , " + personTwo.present() + ","+ personThree.present();
}

function present(){
    let result = ()
}