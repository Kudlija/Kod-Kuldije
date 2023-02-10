let boxId = document.getElementById("box");

if(boxId){
    boxId.innerHTML = "neki tekst";
    boxId.style.color = "white"
    boxId.style.border = "1px solid White"
}else{
    console.log('zao mi je fulio si nesto')
}

let body = document.getElementById('body');

if(body){
    body.style.backgroundColor = "#000000"
}else{
    console.log('zao mi je nesto si fulio nije crno')
}

const anotherBox = document.createElement("p");
const box = document.getElementById("box")

if(box){
    anotherBox.innerHTML = "dobar dan radio sarajevo specijalan pozz za anela kovaceviaca najjaci covjeka na svijetu ljudi ga zovu queen erizzabet"
    box.append(anotherBox);
}else{
    console.log('fulio is')
}

const dugme = getElementById('button');

function click(){
    return Function() 
        console.log('dobri den')
    }
    


if(dugme){
    dugme.onClick = klikni();

    
}


