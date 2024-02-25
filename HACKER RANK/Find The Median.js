function findMedian(arr) {
  arr.sort((a, b) => a - b);
  let median = Math.floor(arr.length / 2);
  return arr[median];
}
let arr = [0, 4, 5, 6, 3, 2, 1];
console.log(findMedian(arr));
