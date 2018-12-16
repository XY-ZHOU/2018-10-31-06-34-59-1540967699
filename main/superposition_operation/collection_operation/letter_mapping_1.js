'use strict';

function even_to_letter(collection) {
  let res = [];
  for (let i = 0; i < collection.length; i++) {
    if (judgeEven(collection[i])) {
      res.push(String.fromCharCode(collection[i] + 96));
    }
  }
  return res;
}

function judgeEven(num) {
  return (num % 2 === 0);
}

module.exports = even_to_letter;