var isPalindrome = function (x) {
  if (x == x.toString().split("").reverse().join("")) return true;
  return false;
};

console.log(isPalindrome(1321));
