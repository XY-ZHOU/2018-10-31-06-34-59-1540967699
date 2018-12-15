'use strict';

function find_last_even(collection) {
  for (let i = collection.length - 1; i > 0; i--) {
    if (judgeEven(collection[i])) {
      return collection[i];
    }
  }
}

function judgeEven(num) {
  return num % 2 == 0;
}

module.exports = find_last_even;
