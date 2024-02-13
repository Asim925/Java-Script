function bonAppetit(bill, k, b) {
  let charged = b;
  bill.splice(k, 1);
  let actual = bill.reduce((a, b) => a + b) / 2;
  let difference = charged - actual;
  if (difference === 0) console.log("Bon Appetit");
  else console.log(difference);
}

let bill = [3, 10, 2, 9];
bonAppetit(bill, 1, 7);
