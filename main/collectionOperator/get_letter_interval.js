'use strict';

function get_letter_interval(number_a, number_b) {
  let arr = [];
  if (compare(number_a, number_b)) {
    for (let i = number_a; i >= number_b; i--) {
      arr.push(String.fromCharCode(i+96));
    }
  } else {
    for (let i = number_a; i <= number_b; i++) {
      arr.push(String.fromCharCode(i+96));
    }
  }
  return arr;
}

function compare(num_a, num_b) {
  return (num_a - num_b >= 0);
}

module.exports = get_letter_interval;
