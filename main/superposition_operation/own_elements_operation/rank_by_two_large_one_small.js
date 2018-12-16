'use strict';

function rank_by_two_large_one_small(collection) {
  collection.sort(sortAsc);
  let i = 0;
  while (collection.length - i > 2) {
    let temp = collection[i];
    collection[i] = collection[i + 1];
    collection[i + 1] = collection[i + 2];
    collection[i + 2] = temp;
    i += 3;
  }
  return collection;
}

function sortAsc(a, b) {
  return a - b;
}
module.exports = rank_by_two_large_one_small;