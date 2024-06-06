function decentNumber(n) {
  let results = "";
  let threes = "33333";
  let fives = "555";
  if (n % 3 === 0) {
    console.log("3 ka dividde");
  } else if (n % 5 === 0) {
    console.log("5 ka dividde");
  } else if (n % 5 === 3 || n % 3 === 5) {
    console.log("3 , 5ka dividde");
  } else console.log(-1);
}

decentNumber(10);
decentNumber(11);
decentNumber(12);
decentNumber(13);
decentNumber(14);
decentNumber(15);
decentNumber(16);
decentNumber(17);
decentNumber(18);
decentNumber(19);
decentNumber(20);
decentNumber(21);
