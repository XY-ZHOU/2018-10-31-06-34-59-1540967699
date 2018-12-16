'use strict';

function median_to_letter(collection) {
  let num = collection[0] + collection.length / 2;
  if (num <= 26) {
    return String.fromCharCode(num + 96);
  } else {
    return "a" + String.fromCharCode(num + 70);
  }
}
module.exports = median_to_letter;