'use strict';

function hybrid_operation(collection) {
  let sum = collection.reduce(function(acc, curValue, currentIndex, array) {
    return acc + curValue;
  });
  return 3 * sum + 2 * collection.length;
}
module.exports = hybrid_operation;