// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];

  if (arr.length % 2 === 0) {

    for (var i = 0; i < arr.length; i += size) {
     newArray.push(arr.slice(i, i + size));
    }

    return newArray;

  } else if (arr.length % 2 !== 0) {

    for (var j = 0; j < arr.length; j += size) {
     newArray.push(arr.slice(j, j + size));
    }

    return newArray;

  } else if (arr.length <= 0 || arr.length === 1) {
    return arr;
  }
}

chunkArrayInGroups(["a", "b", "c", "d", "3"], 2);
