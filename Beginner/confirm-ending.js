// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {

 var tmp = target.length;

  if(str.substr(-tmp) == target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");
