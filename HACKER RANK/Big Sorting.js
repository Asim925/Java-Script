function bigSorting(unsorted) {
  let array = [];
  let kuch = unsorted.map((value) => {
    const val = BigInt(value).toString().replace("n", "");
    array.push(val);
  });
  let sorted = array.sort((a, b) => a - b);
  return sorted;
}

let unsorted = [
  8, 1, 2, 100,
  1852684712373946644047126128874343606551889806987580680183666078535732840587979021961565320888144876580296343072347597403073523339824105028634212169452054521310517525364163618081741785397344269090312972521369251913855741131451598461283205547324125791299950459837050659106811967338179538137559722014266842549549092727748933807894886814867323342759927551548101685839596519081039805576283939033003041277497954378196724643948247794252120321440307772882943072663091805,
  3084193741082937, 3084193741082938, 111, 200,
];
console.log(bigSorting(unsorted));