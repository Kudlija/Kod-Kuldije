function enterFruits() {
    let brojOmiljenihVocki = prompt("Unesi broj vocki");
    let brojOmiljenihVocki = parseInt(brojOmiljenihVockiText);

    const fruits = [];
    for (let i = 0; i< brojOmiljenihVocki;i++) {
        let vocka = promt("Unesi omiljeno voce:");
        fruits[i] = vocka;
    }
    Console.log(fruits);
}
