var num1 = Math.floor(6*Math.random()+1);
var num2 = Math.floor(6*Math.random()+1);

var diceOne = "./images/dice"+num1+".png";
var diceTwo = "./images/dice"+num2+".png";

document.getElementById('img1').setAttribute('src',diceOne);
document.getElementById('img2').setAttribute('src',diceTwo);

if (num1 === num2) {
    document.querySelector('h1').innerHTML='Draw';
}
else if ( num1 > num2) {
    document.querySelector('h1').innerHTML='Player 1 wins';
}
else {
    document.querySelector('h1').innerHTML='Player 2 winds';
}


