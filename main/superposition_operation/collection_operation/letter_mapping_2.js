'use strict';

function average_to_letter(collection) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  if (judgeRemainder(sum, collection.length)) {
    average = sum / collection.length;
  } else {
    average = sum / collection.length + 1;
  }
  return String.fromCharCode(average + 96);
}

function judgeRemainder(num_a, num_b) {
  return num_a % num_b == 0;
}
module.exports = average_to_letter;