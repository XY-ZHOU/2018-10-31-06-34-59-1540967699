'use strict';

function hybrid_operation_to_uneven(collection) {
  let res = collect_all_odd(collection);
  let sum = 0;
  for (let element of collection) {
    sum += element * 3 + 2;
  }
  return sum;
}

function collect_all_odd(collection) {
  return collection.filter(function(element) {
    return element % 2 != 0;
  });
}
module.exports = hybrid_operation_to_uneven;