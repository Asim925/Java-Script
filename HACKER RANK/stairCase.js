function staircase(n) {
  for (let i = n - 1; i >= 0; i--) {
    let pattern = " ".repeat(i);
    let tags = "#".repeat(n - i);

    console.log(pattern + tags);
  }
}

staircase(9);
/* 
 repeat method sheikh.gpt ne bataya tha is se 
ye hota hai ke loop ke mutabiq same cheez same 
string ya value main add hojati hai yani usi 
value main wohi value dobara add ho jati hai */
