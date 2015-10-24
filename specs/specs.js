describe("bottlesOfBeer", function() {
  it("returns the lyrics for 0 bottles of beer", function() {
    expect(bottlesOfBeer(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
  it("returns the lyrics for 1 bottle of beer", function() {
    expect(bottlesOfBeer(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.");
  });
  it("returns the lyrics for 2 bottles of beer", function() {
    expect(bottlesOfBeer(2)).to.equal("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.");
  });
  it("returns the lyrics for 10 bottles of beer", function() {
    expect(bottlesOfBeer(10)).to.equal("10 bottles of beer on the wall, 10 bottles of beer. Take one down and pass it around, 9 bottles of beer on the wall.");
  });
});

// describe("drink", function() {
//   it("prints")
// })
