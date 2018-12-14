'use strict';

function get_integer_interval(number_a, number_b) {
  let arr = [];
  if (output(number_a, number_b)) {
    for (let i = number_a; i >= number_b; i--) {
      arr.push(i);
    }
  } else {
    for (let i = number_a; i <= number_b; i++) {
      arr.push(i);
    }
  }
  return arr;
}

function output(num_a, num_b) {
  return (num_a - num_b >= 0);
}
module.exports = get_integer_interval;