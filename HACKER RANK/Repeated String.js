// function repeatedString(s, n) {
//   if (s.length === 1 && s.includes("a")) return n;
//   let repetitions = Math.ceil(100 / s.length); // finding the repitions for 100 chars
//   let string100 = ""; // empty string for adding the orignal one in it
//   for (let i = 0; i < repetitions; i++) string100 += s; // adding till the repitions
//   let mainString = string100.slice(0, n); // stopping at n:(no.of char for counting "a")

//   let countA = 0;
//   let splittedString = mainString.split("");
//   for (let letter of splittedString) if (letter === "a") countA++;
//   return countA;
// }

// let s = "abcac";
// console.log(repeatedString(s, 10));

// +++++++++++++++++ SHEIKHS METHOD ++++++++++++++++++
function repeatedString(s, n) {
  // Count the number of 'a's in the original string 's'
  let countA = 0;
  for (let letter of s) {
    if (letter === "a") {
      countA++;
    }
  }

  // Calculate how many times the string 's' will fully repeat within the first 'n' characters
  let repetitions = Math.floor(n / s.length);

  // Calculate how many characters are left after all the complete repetitions of 's'
  let remainder = n % s.length;

  // Initialize the total count of 'a's
  let totalCount = countA * repetitions;

  // Count the 'a's in the remaining part of the string (after complete repetitions)
  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      totalCount++;
    }
  }

  // Return the total count of 'a's
  return totalCount;
}

let s =
  "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq";
console.log(repeatedString(s, 549382313570));
