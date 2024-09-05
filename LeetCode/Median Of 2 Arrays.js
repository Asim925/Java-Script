var findMedianSortedArrays = function (nums1, nums2) {
  let array = [...nums1, ...nums2].sort((a, b) => a - b);
  let center = Math.floor(array.length / 2);

  if (array.length % 2 !== 0) return array[center].toFixed(5);

  return ((array[center] + array[center - 1]) / 2).toFixed(5);
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));

//
