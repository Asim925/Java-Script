function acmTeam(topic) {
  let maxLength = 0;
  let count = 0;
  for (let i = 0; i < topic.length; i++)
    for (let j = i + 1; j < topic.length; j++) {
      // Making Pairs
      let subarray = [];
      subarray.push(topic[i], topic[j]);
      // Comparing the each value of subarray
      let part1 = subarray[0][0].split("");
      let part2 = subarray[1][0].split("");

      let collectiveData = "";
      let subsetLength = 0;
      for (let k = 0; k < part1.length; k++) {
        if (
          (part1[k] === "1" && part2[k] === "1") ||
          (part1[k] === "0" && part2[k] === "1") ||
          (part1[k] === "1" && part2[k] === "0")
        )
          collectiveData += "1";
        else if (part1[k] === "0" && part2[k] === "0") collectiveData += "0";

        if (collectiveData[k] === "1") subsetLength++;
      }
      if (subsetLength > maxLength) maxLength = subsetLength;
      if (maxLength === subsetLength) count++;
    }
  return [maxLength, count];
}

// calling

let topic = [["11101"], ["10101"], ["11001"], ["10111"], ["10000"], ["01110"]];
console.log(acmTeam(topic));
