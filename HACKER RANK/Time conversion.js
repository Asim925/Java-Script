function timeConversion(s) {
  let splitted = s.split(":");

  if (splitted[0] === "12") {
    let replaced = s.replace("12", "00");
    return replaced;
  }
  if (s.includes("AM") || raplaced.includes("AM")) {
    return s.replace("AM", "") || replaced.replace("AM", "");
  }

  if (s.includes("PM") && s[0] < 12) {
    let newtime = s.replace("PM", ""); // PM ==> ""
    let number = newtime.split(":")[0]; // targetting the first element to add 12 in
    let numberINT = parseInt(number);

    let changednumber = numberINT + 12;
    let STRnumber = changednumber.toString();
    if (STRnumber === "24") STRnumber = "00";
    let miltitaryTime = newtime.replace(number, STRnumber);
    return miltitaryTime;
  }
}

let s = "12:00:00AM";

console.log(timeConversion(s));
