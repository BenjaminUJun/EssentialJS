// Repeat a String
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  var newArray = [];

  if (num < 0) {
    return "";
  } else {
      for (var i = 0; i < num; i++){
        newArray.push(str);
      }
    var finalString = newArray.join('');
    return finalString;
  }

}

repeatStringNumTimes("abc", 3);
