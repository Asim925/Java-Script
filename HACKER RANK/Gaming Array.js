function gamingArray(arr) {
  let player = 1;
  for (let i = arr.length; i > 0; i--) {
    arr.splice(arr.indexOf(Math.max(...arr)));
    if (arr.length === 0) break;
    player++;
  }
  if (player % 2 === 0) return "ANDY";
  return "BOB";
}

let arr = [7, 4, 6, 5, 9];
console.log(gamingArray(arr));

// 1 means BOB
// 2 means ANDY
