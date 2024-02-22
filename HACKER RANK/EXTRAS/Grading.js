function marksheetCalculations(pst, sindhi, eng, math, chem, phy, comp) {
  let totalMarks = 550;
  let obtainedMarks = pst + sindhi + eng + math + chem + phy + comp;
  let percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

  console.log("===========>> X Matric Results ==========>>\n");

  console.log("Marks of Pakistan Studies: ", pst);
  console.log("Marks of Sindhi:", sindhi);
  console.log("Marks of English:", eng);
  console.log("Marks of Math:", math);
  console.log("Marks of Chemistry:", chem);
  console.log("Marks of Physics:", phy);
  console.log("Marks of Computer:", comp);

  console.log("\n===========>> TOTAL MARKS ==========>>\n");
  console.log("Obtained Marks:", obtainedMarks);
  console.log("Total Marks:", totalMarks);

  console.log("\n===========>> PERCENTAGE ==========>>\n");
  console.log("Percentage:", percentage + "%");

  console.log("\n===========>> Grades ==========>>\n");

  if (percentage >= 95) console.log("Grade: A++");
  else if (percentage >= 90) console.log("Grade: A+");
  else if (percentage >= 85) console.log("Grade: A");
  else if (percentage >= 80) console.log("Grade: B++");
  else if (percentage >= 75) console.log("Grade: B+");
  else if (percentage >= 70) console.log("Grade: B");
  else if (percentage >= 60) console.log("Grade: C");
  else if (percentage >= 50) console.log("Grade: D");
  else if (percentage >= 40) console.log("Grade: E");
  else console.log("Grade: F (fail)");
}

marksheetCalculations(60, 60, 78, 71, 65, 65, 73);
