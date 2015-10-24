// var mainVerse = "bottles of beer on the wall,";
// var verse2 = "bottles of beer. Take one down and pass it around,";
// var verse3 = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,";
//
// var userInput = prompt("Enter a number");
// var subtract = userInput - 1;

var bottlesOfBeer = function(number) {
  var nextNumber = number - 1;
  if (number === 0) {
    return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
  } else if (number === 1) {
    return number + " bottle of beer on the wall, " + number + " bottle of beer. Take one down and pass it around, " + nextNumber + " bottles of beer on the wall.";
  } else if (number === 2) {
    return number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + nextNumber + " bottle of beer on the wall.";
  } else {
    return number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + nextNumber + " bottles of beer on the wall.";
  }
}
