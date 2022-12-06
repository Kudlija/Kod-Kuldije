//java je blok koda koji izvrsaca neku radnju
//var
//let
//const
function multiplyValues(number1, number2) {
    let product = number1 * number2;
    return product;

}
let rezultat = multiplyValues(23, 23);
console.log(rezultat)



//funkciaj kojoj cemo proslijediti 2 broja
//+
function sumNumbers(number1, number2) {
    let sum = number1 + number2;
    return sum


}
let result = sumNumbers(155, 155)
console.log(result)

//kreirati funkciju koja ispisuje sumu 2 broja 
//funkcija prima 2 parametra i zove se printSumNumbers
//funkcija ne vraca nista kao rezultat

function printSumNumbers(broj1, broj2) {
    let sum = broj1 + broj2;
    console.log(sum);


}
printSumNumbers(3, 4);
printSumNumbers(9, 8);

//ovo sam skonto radi kove hajmo dalje

//3. kreirati vise funkcija 
//TIPOVI OPERATORA:
//1.artimeticki operator + - * **
//2.assigment let number =23;
//3.comparison (ili)

// ++ 
let br1 = 23;
console.log(br1++);
console.log(++br1);
console.log(br1);



//ovo je jako sporo
let number= 10
number-=5; //ovo je kao shourtcut 10 - 5  ovo radi za sve + - / % *
console.log(number);



number= 10;
number%=2;
console.log(number);

