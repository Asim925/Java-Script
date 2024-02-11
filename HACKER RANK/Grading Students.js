function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    let gradesBy5 = grades[i] % 5;

    if (!(grades[i] < 38) && gradesBy5 >= 3) {
      if (gradesBy5 === 3) grades[i] += 2;
      if (gradesBy5 === 4) grades[i] += 1;
    }
  }
  return grades;
}

let grades = [35, 36, 37, 38, 39, 40, 41, 42, 43];
console.log(gradingStudents(grades));
