'use strict';

function average_uneven(collection) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (judgeUneven(collection[i])) {
      sum += collection[i];
      count++;
    }
  }
  return sum / count;
}

function judgeUneven(num) {
  return num % 2 != 0;
}
module.exports = average_uneven;