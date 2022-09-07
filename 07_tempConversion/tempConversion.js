const ftoc = function (num) {
  let farenheiit = num;
  let toCelcius = Math.round((farenheiit - 32) * (5 / 9) * 10) / 10;
  return toCelcius;
};

const ctof = function (num) {
  let celcius = num;
  let toFarenheit = Math.round((celcius * (9 / 5) + 32) * 10) / 10;
  return toFarenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
