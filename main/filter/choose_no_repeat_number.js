'use strict';

function choose_no_repeat_number(collection) {
  let res = [];
  for (let i = 0; i < collection.length; i++) {
    if (judgeStrInArr(res, collection[i])) {
      res.push(collection[i]);
    }
  }
  return res;
}

function judgeStrInArr(array, str) {
  return (array.indexOf(str) === -1);
}

module.exports = choose_no_repeat_number;
