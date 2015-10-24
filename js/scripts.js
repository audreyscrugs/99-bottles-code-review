var verse1 = "bottles of beer on the wall,";
var verse2 = "bottles of beer. Take one down and pass it around,";
var verse3 = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,";

var userInput = prompt("Enter a number");

var bottlesOfBeer = function(number) {
  if (userInput > 0) {
    return (userInput + verse1)
  } else {
    return verse3
  }
};
