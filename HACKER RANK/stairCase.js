// ================ METHOD 1 =================== //

// function staircase(n) {
// for (let i = n - 1; i >= 0; i--) {
// let pattern = " ".repeat(i);
// let tags = "#".repeat(n - i);

// console.log(pattern + tags);
// }
// }
//
// staircase(2);
/* 
 repeat method sheikh.gpt ne bataya tha is se 
ye hota hai ke loop ke mutabiq same cheez same 
string ya value main add hojati hai yani usi 
value main wohi value dobara add ho jati hai */

// ================ METHOD 2 =================== //

function staircase(n) {
  for (let i = n; i > 0; i--) {
    let spaces = "";
    let pattern = "";
    // console.log("i array ==> " + i);

    for (let j = i - 1; j >= 0; j--) {
      spaces += " ";
      // console.log("j index ==> " + j);
    }
    for (let k = 0; k <= n - i; k++) {
      pattern += "#";
      // console.log("k index ==> " + k);
    }
    console.log(spaces + pattern);
  }
}

staircase(4);
