/* Check if the word is a palindrome */

function palindrome(str) {
  // Good luck!
  var tmp = str.toLowerCase().replace(/[\W_]/g,'');
  var tmp2 = tmp.split('').reverse().join('');
  if (tmp == tmp2) {
    return true;
  } else {
    return false;
  }

}

palindrome("eye");
