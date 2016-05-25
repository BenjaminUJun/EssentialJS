// Seek and destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {

  // Converts input into a single array
  var args = Array.prototype.slice.call(arguments);

  // Splits it into two arrays
  args.splice(0,1);

  // Filters through the first array using the elements of the second
  // array. If it finds it, it return -1
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
