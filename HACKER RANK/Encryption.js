function encryption(s) {
  s = s.split("");
  let columns = s.length ** 0.5;
  if (columns !== Math.floor(columns)) columns = Math.floor(columns) + 1;
  let arr = [];
  for (let i = 0; i < s.length; i += columns)
    arr.push(s.slice(i, i + columns).join(""));

  let encrypt = [];
  for (let i = 0; i < columns; i++) {
    let set = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === undefined) continue;
      set.push(arr[j][i]);
    }
    encrypt.push(set.join(""));
  }
  return encrypt.join(" ");
}

let s = "haveaniceday";
console.log(encryption(s));
