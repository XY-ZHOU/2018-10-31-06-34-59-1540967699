'use strict';

function collect_all_even(collection) {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (judgeEven(parseInt(collection[i]))) {
      arr.push(collection[i]);
      }
  }
  return arr;
}

function judgeEven(num) {
  return (num % 2 === 0);
}

module.exports = collect_all_even;