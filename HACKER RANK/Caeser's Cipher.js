function caesarCipher(s, k) {
  k = k % 26;
  let result = "";

  for (let letter of s) {
    let code = letter.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      code += k;
      if (code > 90) code -= 26;
      result += String.fromCharCode(code);
    } else if (code >= 97 && code <= 122) {
      code += k;
      if (code > 122) code -= 26;
      result += String.fromCharCode(code);
    } else if (code < 65 || (code > 90 && code < 97) || code > 122) {
      result += letter;
      continue;
    }
  }
  return result;
}

// function caesarCipher(s, k) {
//   k = k % 26;
//   let output = "";
//   for (let a of s) {
//     let code = a.charCodeAt(0);
//     // A - Z
//     if (code >= 65 && code <= 90) {
//       let newCode = code + k;
//       if (newCode > 90) {
//         newCode -= 26;
//       }
//       output += String.fromCharCode(newCode);
//     }
//     // a - z
//     if (code >= 97 && code <= 122) {
//       let newCode = code + k;
//       if (newCode > 122) {
//         newCode -= 26;
//       }
//       output += String.fromCharCode(newCode);
//     }
//     if (code < 65 || (code > 90 && code < 97) || code > 122) {
//       output += a;
//       continue;
//     }
//   }
//   return output;
// }

let s = "Always-Look-on-the-Bright-Side-of-Life";
console.log(caesarCipher(s, 5));
