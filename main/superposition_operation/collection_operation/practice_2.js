'use strict';

function hybrid_operation_to_uneven(collection) {
  let res = [];
  for (let i = 0; i < collection.length; i++) {
    if (judgeUneven(collection[i])) {
      collection[i] = 3 * collection[i] + 2;
      res.push(collection[i]);
    }
  }
  return res;
}

function judgeUneven(num) {
  return num % 2 != 0;
}
module.exports = hybrid_operation_to_uneven;