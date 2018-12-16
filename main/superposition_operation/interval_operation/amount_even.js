'use strict';

function amount_even(collection) {
  let sum = 0;
  for (let i = 0; i < collection.length; i++) {
    if (judgeEven(collection[i])) {
      sum += collection[i];
    }
  }
  return sum;
}

function judgeEven(num) {
  return num % 2 == 0;
}
module.exports = amount_even;