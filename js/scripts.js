
var pigLatin = function(apple){

  var firstChar = apple.charAt(0);
  var vowels = ["a", "e", "i", "o", "u"]
  if (firstChar === vowels)
  {
    return true;
  } else if (firstChar !== vowels) {
    return true;
  }
  else {
    return false;
  }
}
