var mainVerse = "bottles of beer on the wall,";
var verse2 = "bottles of beer. Take one down and pass it around,";
var verse3 = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,";

var userInput = prompt("Enter a number");
var subtract = userInput - 1;

var bottlesOfBeer = function(number) {
  if (userInput > 0) {
    return (userInput + "" + mainVerse + "" + userInput + "" + verse2 + "" + subtract + "" + mainVerse)
  } else {
    return verse3
  }
};
