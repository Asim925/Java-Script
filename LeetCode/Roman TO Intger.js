var romanToInt = function (s) {
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let letters = s.split("");
  let number = 0;
  for (let letter of letters) {
    number += romans[letter];
    console.log(number);
  }
};
console.log(romanToInt("LVIII"));
