function pangrams(s) {
  s = s.toLowerCase();
  for (let i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);
    if (!s.includes(letter)) return "not pangram";
  }
  return "pangram";
}
