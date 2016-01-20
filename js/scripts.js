var pigLatin = function(word){

  var vowels = ["a", "e", "i", "o", "u"]

  for (var i = 0 ; i <= vowels.length; i++) {
    if (word[0] === vowels[i])
    {
      return "vowel";
    } else if (word[0] !== vowels[i]) {
      return "consonant";
    }
    else {
      return false;
    }
  }
}
  $(document).ready(function(){
    $("form#pigLatin").submit(function(event){
      var word = $("input#word").val();
       var validate = pigLatin(word);
      if (validate === "vowel") {
      $(".result").text(word+"ay")
      }
      else if (validate === "consonant") {
        $(".result").text(word.slice(1)+ word[0]+"ay");
      }
      else {
        $(".result").text("no")
      }
    event.preventDefault();
    })
  })
