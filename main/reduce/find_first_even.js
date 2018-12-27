'use strict';

function find_first_even(collection) {
  return collection.find(function(element) {
    return element % 2 === 0;
  });
}
module.exports = find_first_even;