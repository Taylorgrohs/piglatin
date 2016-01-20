describe('pigLatin', function() {
  it("starts with a vowel, it start with one or more consonants and it starts with y", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  })

  it('starts with vowel, add "ay" to the end', function() {
    expect(pigLatin("animal")).to.equal("animalay");
  })

  it('starts with one or more consonants, move all of the first consecutive consonants to the end and add "ay"', function(){
    expect(pigLatin("strange")).to.equal("angestray");
  })

  it('starts with "y" treat as consonant', function(){
    expect(pigLatin("yellow")).to.equal("ellowyay");
  })
})
