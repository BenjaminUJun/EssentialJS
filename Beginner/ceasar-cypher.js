// Caesars Cipher
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) { // LBH QVQ VG!
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      arr.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return arr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
