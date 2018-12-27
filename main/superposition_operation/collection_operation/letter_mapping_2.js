'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(compute_average(collection) + 96);
}

function compute_average(collection) {
  let sum = collection.reduce(function(acc, curValue, currentIndex, array) {
    return acc + curValue;
  });
  return (sum / collection.length);
}
module.exports = average_to_letter;