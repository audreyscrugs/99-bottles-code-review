describe('bottlesOfBeer', function() {
  it("adds user input to the bottles of beer song", function() {
    expect(bottlesOfBeer(userInput)).to.equal(userInput + "" + verse1);
  });
});
