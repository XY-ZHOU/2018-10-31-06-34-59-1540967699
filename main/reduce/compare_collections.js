'use strict';

function compare_collections(collection_a, collection_b) {
  if (isSameLength(collection_a, collection_b)) {
    return false;
  } else {
    for (let i = 0; i < collection_a.length; i++) {
      if (collection_a[i] != collection_b[i]) {
        return false;
      }
    }
    return true;
  }
}

function isSameLength(arr_a, arr_b) {
  return arr_a.length != arr_b.length;
}
module.exports = compare_collections;
