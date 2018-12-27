'use strict';

function find_last_even(collection) {
  collection.reverse();
  return collection.find(function(element) {
    return element % 2 === 0;
  });
}
module.exports = find_last_even;