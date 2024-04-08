//  1s are woh values : jin din dee thin us bande ne
//  2s are woh values : jis din deni thin

function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if ((m1 <= m2 && y1 <= y2 && d1 <= d2) || y1 < y2 || (m1 < m2 && y1 === y2))
    return fine;

  if (d1 > d2) fine = 15 * (d1 - d2);
  if (m1 > m2) fine = 500 * (m1 - m2);
  if (y1 > y2) fine = 10000;

  return fine;
}

console.log(libraryFine(28, 2, 2015, 15, 4, 2015));
