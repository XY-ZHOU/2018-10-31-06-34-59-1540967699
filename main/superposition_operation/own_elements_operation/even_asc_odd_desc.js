'use strict';
var even_asc_odd_desc = function(collection) {
  let evenArr = [];
  let unevenArr = [];
  for (let element of collection) {
    (element % 2 === 0) ? evenArr.push(element): unevenArr.push(element);
  }
  return evenArr.sort(sortAsc).concat(unevenArr.sort(sortDesc));
}

function sortAsc(a, b) {
  return a - b;
}

function sortDesc(a, b) {
  return b - a;
}
module.exports = even_asc_odd_desc;