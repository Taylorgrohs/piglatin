describe('pigLatin', function() {
  it("starts with a vowel, it start with one or more consonants and it starts with y", function() {
    expect(pigLatin("false")).to.equal(true);
  })

  it('starts with vowel, add "ay" to the end', function() {
    expect(pigLatin("animal")).to.equal(true);
  })

  it('starts with one or more consonants, move all of the first consecutive consonants to the end and add "ay"', function(){
    expect(pigLatin("start")).to.equal(true);
  })
})
