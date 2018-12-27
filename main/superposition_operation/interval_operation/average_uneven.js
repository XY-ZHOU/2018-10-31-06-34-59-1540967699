'use strict';

function average_uneven(collection) {
  let res = collect_all_even(collection);
  let sum = 0;
  for (let element of res) {
    sum += element;
  }
  return sum / res.length;
}

function collect_all_odd(collection) {
  return collection.filter(function(element) {
    return element % 2 != 0;
  });
}
module.exports = average_uneven;