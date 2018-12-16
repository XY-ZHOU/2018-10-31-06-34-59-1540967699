'use strict';

function one_add_next_multiply_three(collection) {
  let arr = new Array(collection.length - 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (collection[i] + collection[i + 1]) * 3;
  }
  return arr;
}
module.exports = one_add_next_multiply_three;