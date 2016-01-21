
var pigLatin = function(word){
  //debugger;
  //var outterWord = outterBlock(word);
  var slicePostion = search(word); // assigns number generaged by search function //word = "strange apple"
  /*
  var wordArray = word.split(' ');
  for ( var a = 0; a < wordArray.length; a++){
    search(wordArray[a]);
  }
  */
  if(word[0] === "q") {
    return word.slice(2) + word.slice(0, 2) + "ay";
  } else {
    return word.slice(slicePostion) + word.slice(0, slicePostion) + "ay"; //first slice removes and save letters from certain/target index to end of length of array, second slice removes and save letters from 0 index to certain/target index.
    }
};


 var outterBlock = function(word) {
   //debugger;
   var sentence;
   var word = word.split(" ")
   for (var b = 0; b < word1.length; b++) {
    sentence += pigLatin(word[b]);
     //return sentence;
   }
   return sentence; 
 }


var search = function(word) {
    var word3 = word.split("")
    var vowels = ["a", "e", "i", "o", "u"]
    for (var j = 0; j < word3.length; j++) {
      for (var i = 0; i < vowels.length; i++) {
        if (word3[j]  === vowels[i]) {
          return j;     // returns number (j-eth number);
        }
      }
    }
};



$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    var word = $("input#word").val();

    var validate = pigLatin(word);
    //debugger;
    if (validate) {
      $(".result").text(outterBlock(word));
    }
    else {
      alert("error");
    }
    event.preventDefault();
  });
});
