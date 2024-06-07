// function morganAndString(a, b) {
//   let results = "";
//   a = a.split("");
//   b = b.split("");

//   while (a.length >= 0 && b.length >= 0) {
//     if (a[0] === undefined || b[0] === undefined) break;
//     let codeOfA = a[0].charCodeAt(0);
//     let codeOfB = b[0].charCodeAt(0);
//     if (codeOfA > codeOfB) {
//       results += b[0];
//       b.shift();
//     } else if (codeOfA <= codeOfB) {
//       results += a[0];
//       a.shift();
//     }
//   }
//   if (a.length !== 0) results += a.join("");
//   else if (b.length !== 0) results += b.join("");
//   return results;
// }

// console.log(morganAndString("JACK", "DANIEL"));
