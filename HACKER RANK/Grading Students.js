function gradingStudents(grades) {
  for (let grade of grades) {
    if (!(grade < 38) && grade % 5 >= 3) {
      for (let i = 3; i <= 5; i++) {
        for (let j = 0; j <= 2; j++) if (grade % 5 === i) grade += j;
      }
      if (!(grade < 38) && grade % 5 <= 3) console.log(grade);
      // console.log(grade);
    }
  }
}

let grades = [37, 38, 39];
gradingStudents(grades);
