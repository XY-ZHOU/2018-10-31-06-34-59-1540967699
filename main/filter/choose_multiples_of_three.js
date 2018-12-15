'use strict';

function choose_multiples_of_three(collection) {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (judgeEven(parseInt(collection[i]))) {
      arr.push(collection[i]);
      }
  }
  return arr;
}

function judgeEven(num) {
  return (num % 3 === 0);
}

module.exports = choose_multiples_of_three;
