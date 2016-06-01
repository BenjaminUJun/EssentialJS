// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.


function sumAll(arr) {
  var high = Math.max.apply(null, arr);
  var low = Math.min.apply(null, arr);
  var tmp = 0;
  for (var i = low; i < high; i++) {
    tmp += low;
  }
  return tmp;

}

sumAll([1, 4]);
