'use strict';

function hybrid_operation_to_uneven(collection) {
  let res = collect_all_odd(collection);
  for (let element of collection) {
    element = element * 3 + 2;
  }
  return res;
}

function collect_all_odd(collection) {
  return collection.filter(function(element) {
    return element % 2 != 0;
  });
}
module.exports = hybrid_operation_to_uneven;