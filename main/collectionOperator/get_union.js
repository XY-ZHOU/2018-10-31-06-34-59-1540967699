'use strict';

function get_union(collection_a, collection_b) {
  let arr = collection_b.filter(function(element) {
    return !collection_a.includes(element);
  });
  return collection_a.concat(arr);
}
module.exports = get_union;