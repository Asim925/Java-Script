// // let arr = "aabaa";

// // let s = "aabaa";
// // console.log(s.slice(1, 4 + 1));

// function countSubstrings(s, queries) {
//   let results = [];
//   for (let query of queries) {
//     let substring = s.slice(query[0], query[1] + 1);
//     if (substring.length === 1) results.push(1);
//     else {
//       let x = [];
//       for (let i = 0; i < substring.length; i++)
//         for (let j = i; j < substring.length; j++) {
//           let part = substring.slice(i, j + 1);
//           if (!x.includes(part)) x.push(part);
//         }

//       results.push(x.length);
//     }
//   }
//   console.log(results);
// }

// let queries = [
//   [1, 1],
//   [1, 4],
//   [1, 1],
//   [1, 4],
//   [0, 2],
// ];
// let s = "aabaa";
// countSubstrings(s, queries);
