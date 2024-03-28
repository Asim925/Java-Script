function acmTeam(topic) {
  let maxLength = 0;
  let data = [];
  let counter = {};

  for (let i = 0; i < topic.length; i++)
    for (let j = i + 1; j < topic.length; j++) {
      // Making Pairs
      let subarray = [];
      subarray.push(topic[i], topic[j]);
      // Comparing the each value of subarray
      let part1 = subarray[0][0].split("");
      let part2 = subarray[1][0].split("");

      let collectiveData = "";
      let subarrayLength = 0;
      for (let k = 0; k < part1.length; k++) {
        if (
          (part1[k] === "1" && part2[k] === "1") ||
          (part1[k] === "0" && part2[k] === "1") ||
          (part1[k] === "1" && part2[k] === "0")
        )
          collectiveData += "1";
        else if (part1[k] === "0" && part2[k] === "0") collectiveData += "0";

        if (collectiveData[k] === "1") subarrayLength++;
      }
      if (subarrayLength > maxLength) maxLength = subarrayLength;
      data.push(collectiveData);
    }

  for (let value of data) {
    counter[value] = (counter[value] || 0) + 1;
  }
  let sameCount = 0;

  for (let n in counter) {
    if (counter[n] > sameCount) sameCount = counter[n];
  }
  return [maxLength, sameCount];
}

// calling

let topic = ["10101", "11100", "11010", "00101"];
console.log(acmTeam(topic));
