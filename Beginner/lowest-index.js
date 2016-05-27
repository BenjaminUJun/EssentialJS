// Where do I belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.


function getIndexToIns(arr, num) {

  // Find my place in this sorted array.

    arr.sort(function(a, b) {
        return a - b;
        });
    for (var a in arr){
        if (arr[a] >= num)
            return parseInt(a);
    }
    return arr.length;

}

getIndexToIns([50, 10], 50);
