let number = 3;
// 3*2*1 = 6
function factorial(number) {
  let factorial = 1;

  //   for (let i = 1; i <= number; i++) {
  //     factorial *= i;
  // }

  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }

  return "The factorial of given number is: " + factorial;
}

console.log(factorial(number));
