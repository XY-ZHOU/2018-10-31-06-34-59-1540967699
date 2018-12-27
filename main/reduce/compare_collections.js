'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.toString() != collection_b.toString()) {
    return false;
  } else {
    return true;
  }
}
module.exports = compare_collections;