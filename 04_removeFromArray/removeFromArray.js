const removeFromArray = function (arr, ...args) {
  let changedArray = arr;
  for (let i = 0; i < arguments.length; i++) {
    let index = args[i];
    let checkedValue = changedArray.indexOf(index);
    if (checkedValue != -1) {
      changedArray.splice(checkedValue, 1);
    } else {
      // do nothing
    }
  }
  return changedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
