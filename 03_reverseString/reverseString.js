const reverseString = function (str) {
  let arrayString = [...str];
  let reversedArray = arrayString.reverse();
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
