function finalGrade(num1, num2, num3) {
  var avg = (num1 + num2 + num3) / 3;
  
  if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 || num3 < 0 || num3 > 100) {
    return 'You have entered an invalid grade.';
  } else if (avg >= 0 && avg <= 59) {
    return "F";
  } else if (avg >= 60 && avg <= 69) {
    return "D";
  } else if (avg >= 70 && avg <= 79) {
    return "C";
  } else if (avg >= 80 && avg <= 89) {
    return "B";
  } else if (avg >= 90 && avg <= 100) {
    return "A";
  } 
};

