function timeConversion(s) {
  let splitted = s.split(":");
  let hour = parseInt(splitted[0], 10);

  if (s.includes("PM") && hour === 12) {
    return s.replace("PM", "");
  }

  if (s.includes("AM")) {
    if (hour <= "12") {
      let replaced = s.replace("12", "00");
      return replaced.replace("AM", "");
    }
  }

  if (s.includes("PM") && !hour < 12) {
    let newtime = s.replace("PM", ""); // PM ==> ""
    let number = newtime.split(":")[0]; // targetting the first element to add 12 in
    let numberINT = parseInt(number); // converting string to number

    let changednumber = numberINT + 12; // adding 12
    let STRnumber = changednumber.toString(); // converting number to stringn
    if (STRnumber === "24") STRnumber = "00"; // if 24 then === 00
    let miltitaryTime = newtime.replace(number, STRnumber); //replacig the hour to the militry format
    return miltitaryTime; // kullu khallas
  }
}

let s = "07:00:00PM";

console.log(timeConversion(s));
