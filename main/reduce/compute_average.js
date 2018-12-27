'use strict';

function compute_average(collection) {
  let sum = collection.reduce(function(acc, curValue, currentIndex, array) {
    return acc + curValue;
  });
  return (sum / collection.length);
}
module.exports = compute_average;