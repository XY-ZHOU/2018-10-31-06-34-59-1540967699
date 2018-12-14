'use strict';

function get_intersection(collection_a, collection_b) {
  let arr = [];
  for (let i = 0; i < collection_b.length; i++) {
    if (judgeStrInArr(collection_a, collection_b[i])) {
      arr.push(collection_b[i])
    }
  }
  return arr;
}

function judgeStrInArr(arr, str) {
  return (arr.indexOf(str) != -1);
}

module.exports = get_intersection;
