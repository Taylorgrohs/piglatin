# piglatin
function splitIt(words) {
    var wordArray = words.split(" ");
    var piggySentence = "";
    for(var i = 0; i < wordArray.length; i++) {
        piggySentence += pigLatin(wordArray[i]) + " ";
    }
    return piggySentence;
}

var pigLatin = function(word){
  var slicePostion = search(word); // assigns number generaged by search function
  if(word[0] === "q") {
    return word.slice(2) + word.slice(0, 2) + "ay";
  } else {
    return word.slice(slicePostion) + word.slice(0, slicePostion) + "ay"; //first slice removes and save letters from certain/target index to end of length of array, second slice removes and save letters from 0 index to certain/target index.
    }
};

var search = function(word) {
  var  word = word.split("");
  var vowels = ["a", "e", "i", "o", "u"]

  for (var j = 0; j < word.length; j++) {
    for (var i = 0; i < vowels.length; i++) {
      if (word[j]  === vowels[i]) {
        return j;     // returns number (j-eth number);
      }
    }
  }
};
https://repl.it/Bf1w
