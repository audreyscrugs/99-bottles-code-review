describe('bottlesOfBeer', function() {
  it("adds user input to the main verse and second verse of the bottles of beer song", function() {
    expect(bottlesOfBeer(20)).to.equal(userInput + "" + mainVerse + "" + userInput + "" + verse2);
  });
  it("adds user input - 1 to repeated main verse of song", function() {
    expect(bottlesOfBeer(userInput - 1)).to.equal(subtract + "" + mainVerse);
  });
});
