const number = [3, 4];

// adding at the end
number.push(5, 6);

// adding at the start
number.unshift(1, 2);

// adding anywhere
//is ke parameters se values dekh kr rakho
number.splice(2, 0, "a", "b");

console.log(number);
