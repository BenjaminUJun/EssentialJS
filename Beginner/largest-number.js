// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array.


function largestOfFour(arr) {
  // You can do this!
  newArray = [];
  for (var i = 0; i < arr.length; i++){
  var tmp = 0;
   for (var j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > tmp) {
     tmp = arr[i][j];
    }
   }
   newArray.push(tmp);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
