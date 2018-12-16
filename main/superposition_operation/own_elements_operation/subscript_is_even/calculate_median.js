'use strict';
var calculate_median = function(collection) {
  let count = 0;
  for (let i = 1; i < collection.length; i += 2) {
    count++;
  }
  if (judgeUneven(count)) {
    return collection[count];
  } else {
    return (collection[(count / 2 - 1) * 2 + 1] + collection[count + 1]) / 2;
  }
};

function judgeUneven(num) {
  return num % 2 != 0;
}
module.exports = calculate_median;