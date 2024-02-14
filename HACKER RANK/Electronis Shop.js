function getMoneySpent(keyboards, drives, b) {
  let estimatesArr = [];

  for (let i = 0; i < keyboards.length; i++)
    for (let j = 0; j < drives.length; j++) {
      let estimates = keyboards[i] + drives[j];

      if (estimates <= b) estimatesArr.push(estimates);
    }

  if (estimatesArr.length === 0) return -1;
  let sorted = estimatesArr.sort((a, b) => b - a);
  return sorted[0];
}

let keyboards = [3, 1];
let drives = [8, 5, 2];
console.log(getMoneySpent(keyboards, drives, 10));
