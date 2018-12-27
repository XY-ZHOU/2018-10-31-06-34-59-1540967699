'use strict';

function compute_median(collection) {
  collection.sort(sortAsc);
  let lowMiddle = Math.floor((collection.length - 1) / 2);
  let highMiddle = Math.ceil((collection.length - 1) / 2);
  return (Number(collection[lowMiddle]) + Number(collection[highMiddle])) / 2;
}

function sortAsc(a, b) {
  return a - b;
}
module.exports = compute_median;