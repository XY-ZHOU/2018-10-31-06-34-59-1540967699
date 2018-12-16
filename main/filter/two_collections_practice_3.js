'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let res = [];
  for (let i = 0; i < collection_a.length; i++) {
    for (let j = 0; j < collection_b.length; j++) {
      if (judgeDivisible(collection_a[i], collection_b[j])) {
        res.push(collection_a[i]);
        break;
      }
    }
  }
  return res;
}

function judgeDivisible(num_a, num_b) {
  return num_a % num_b == 0;
}
module.exports = choose_divisible_integer;