"use strict";

var min = 0;
var max = 777;
var randomNumber;


function getRandom() {
  return Math.floor((Math.random() * (max - min)) + min);
}

function getGuess(){
  return document.querySelector('input').value;
}

function showResponse(response){
  document.querySelector('.response').innerHTML = response;

}
function reviewGuess(guess){
guess = Number.parseFloat(guess);
if (isNaN (guess)) {return "Nope. Not a number."}
if (guess < randomNumber) {return  "Nope. Too Low!"; }
if (guess > randomNumber){return  "Nope. Too high."; }
return  "WOOT!  You got it!";

}

function onGuessCheck (){
  debugger;
  var theGuessIs = getGuess();
  var response = reviewGuess(theGuessIs);
  showResponse(response);
  return false;

}

function clearGuess() {
document.querySelector('input').value = "";

}

function onPageLoad(){
  debugger;
  clearGuess();
randomNumber = getRandom();
console.log(randomNumber);

}

window.onload = onPageLoad;
document.querySelector('button').onclick = onGuessCheck;
