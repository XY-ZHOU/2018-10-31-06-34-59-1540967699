'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(function(element) {
    return collection_a.indexOf(element) != -1;
  });
}
module.exports = get_intersection;