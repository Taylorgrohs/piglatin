
var pigLatin = function(apple){

  var firstChar = apple.charAt(0);
  if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u")
  {
    return true;
  }
  else {
    return false;
  }
}
