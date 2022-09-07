const sumAll = function (a, b) {
  let sum = 0;
  let num1 = a;
  let num2 = b;
  if (
    a < b &&
    a > -1 &&
    b > -1 &&
    typeof a === "number" &&
    typeof b === "number"
  ) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else if (
    b < a &&
    a > -1 &&
    b > -1 &&
    typeof a === "number" &&
    typeof b === "number"
  ) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
