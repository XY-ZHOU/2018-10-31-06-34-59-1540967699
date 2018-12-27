'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(function(element) {
    return collection_b.indexOf(element) === -1;
  });
}
module.exports = choose_no_common_elements;