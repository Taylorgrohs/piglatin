var pigLatin = function(word){
  var example = search(word);
  return word.slice(example) + word.slice(0, example) + "ay";
};

var search = function(word) {
  var  word = word.split("");
  var vowels = ["a", "e", "i", "o", "u"]

for (var j = 0; j < word.length; j++) {
  for (var i = 0; i < vowels.length; i++) {
    if (word[j]  === vowels[i]) {
      return j;
    }
  }
}
};
  $(document).ready(function(){
    $("form#pigLatin").submit(function(event){
      var word = $("input#word").val();
      var validate = pigLatin(word);
      debugger;
      if (validate) {
        $(".result").text(pigLatin(word));
      }
      else {
        alert("error");
      }


    event.preventDefault();
  });
});
