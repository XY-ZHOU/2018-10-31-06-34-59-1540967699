'use strict';

function amount_even(collection) {
  let res = collect_all_even(collection);
  let sum = 0;
  for (let element of res) {
    sum += element;
  }
  return sum;
}

function collect_all_even(collection) {
  return collection.filter(function(element) {
    return element % 2 === 0;
  });
}
module.exports = amount_even;