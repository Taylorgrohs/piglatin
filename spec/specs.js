describe('pigLatin', function() {
  it("starts with a vowel, it start with one or more consonants and it starts with y", function() {
    expect(pigLatin("false")).to.equal(false);
  })

  it('starts with vowel, add "ay" to the end', function() {
    expect(pigLatin("animal")).to.equal(true);
  })
})