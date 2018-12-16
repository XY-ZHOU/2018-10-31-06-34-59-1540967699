'use strict';
var number_map_to_word_over_26 = function(collection) {
  for (let i = 0; i < collection.length; i++) {
    let n = rounding(collection[i]);
    switch (n) {
      case 0:
        collection[i] = String.fromCharCode(collection[i] + 96);
        break;
      case 1:
        collection[i] = numberToString(collection[i], 1);
        break;
      case 2:
        collection[i] = numberToString(collection[i], 2);
        break;
    }
  }
  return collection;
};

function rounding(num) {
  return parseInt(num / 26);
}

function numberToString(number, n) {
  return String.fromCharCode(n + 96) + String.fromCharCode(number - 26 * n + 96);
}
module.exports = number_map_to_word_over_26;