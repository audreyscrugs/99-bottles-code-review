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

var drink = function(number) {
  var returnString = "";

  for (var i = number ; i >= 0 ; i--) {
    var text = bottlesOfBeer(i);
    returnString += "<li>" + text + "</li>";
  }

  return returnString;
}

$(document).ready(function() {
  $("#drink").click(function(event) {
    var number = prompt("Enter a bottle number");


      $("#display").append(drink(number));

    });
      event.preventDefault();
  });
