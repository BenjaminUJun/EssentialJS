/* Find the longest word in a string */

function findLongestWord(str) {
  str = str.split(' ');
  var tmp = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i].length > tmp) {
      tmp = str[i].length;
    }
  }
  return tmp;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
