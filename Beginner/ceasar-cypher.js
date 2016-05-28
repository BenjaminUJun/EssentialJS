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


//Alternative solution provided by:
// thanks @anuragaryan @SaintPeter @vaskezu @abhisekp for your help with Algorithm: Caesar's Cipher

function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, (L) => String.fromCharCode(65 + (L.charCodeAt(0) - 65 + 13) % 26));
}

/*
Code Explanation:

String.prototype.replace function lets you transform a String based on some pattern match (defined by a regular expression),
and the transformation function (which is applied to each of the pattern matches).

Arrow function syntax is used to write the function parameter to replace().
L represents a single unit, from every pattern match with /[A-Z]/g - which is every uppercase letter in the alphabet,
from A to Z, present in the string.

The arrow function applies the rot13 transform on every uppercase letter from English alphabet present in the given string.
*/
