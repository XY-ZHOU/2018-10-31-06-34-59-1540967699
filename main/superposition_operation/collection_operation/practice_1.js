'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  for (let i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  return 3 * sum + 2 * collection.length;
}
module.exports = hybrid_operation;