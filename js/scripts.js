// var mainVerse = "bottles of beer on the wall,";
// var verse2 = "bottles of beer. Take one down and pass it around,";
// var verse3 = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,";
//
// var userInput = prompt("Enter a number");
// var subtract = userInput - 1;

var bottlesOfBeer = function(number) {
  if (number == 0) {
    return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
  } else {
    return "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.";
  }
}
