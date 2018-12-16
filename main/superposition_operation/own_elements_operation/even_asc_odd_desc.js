'use strict';
var even_asc_odd_desc = function(collection) {
  let evenArr = [];
  let unevenArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (judgeEven(collection[i])) {
      evenArr.push(collection[i]);
    } else {
      unevenArr.push(collection[i]);
    }
  }
  return evenArr.sort(sortAsc).concat(unevenArr.sort(sortDesc));
}

function judgeEven(num) {
  return (num % 2 === 0);
}

function sortAsc(a, b) {
  return a - b;
}

function sortDesc(a, b) {
  return b - a;
}
module.exports = even_asc_odd_desc;