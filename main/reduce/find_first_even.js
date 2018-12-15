'use strict';

function find_first_even(collection) {
  for (let i = 0; i < collection.length; i++) {
    if (judgeEven(collection[i])) {
      return collection[i];
    }
  }
}

function judgeEven(num) {
  return num % 2 == 0;
}

module.exports = find_first_even;
