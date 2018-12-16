'use strict';

function hybrid_operation_to_uneven(collection) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (judgeUneven(collection[i])) {
      sum += collection[i];
      count++;
    }
  }
  return 3 * sum + 5 * count;
}

function judgeUneven(num) {
  return num % 2 != 0;
}
module.exports = hybrid_operation_to_uneven;