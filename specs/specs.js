describe('bottlesOfBeer', function() {
  it("returns the lyrics for 0 bottles of beer", function() {
    expect(bottlesOfBeer(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
  // it("adds user input - 1 to repeated main verse of song", function() {
  //   expect(bottlesOfBeer(userInput - 1)).to.equal(subtract + "" + mainVerse);
  // });
});
