function designerPdfViewer(h, word) {
  let wordsHeight = [];
  let length = word.length;
  for (let i = 0; i < length; i++) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let letter = word[i];

    let lettersIndex = alphabets.indexOf(letter);
    let kuch = h[lettersIndex];
    wordsHeight.push(kuch);
  }
  let area = Math.max(...wordsHeight) * length;
  return area;
}

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
let word = "torn";

console.log(designerPdfViewer(h, word));
