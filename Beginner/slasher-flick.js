// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {

  var newArray = [];

  if (howMany < 0) {
    return newArray;
  }
  arr = arr.splice(howMany, arr.length);
  return arr;

}

slasher(["burgers", "fries", "shake"], ["fries", "shake"]);
