/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let strArr = cleanStr.split("");
  let strArrReverse = strArr.reverse();
  let strReverse = strArrReverse.join("");

  return cleanStr === strReverse;
}

module.exports = isPalindrome;
