'use strict';

function get_integer_interval(number_a, number_b) {
  let start = (number_a >= number_b) ? number_b : number_a;
  let end = (number_a >= number_b) ? number_a : number_b;
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return (number_a <= number_b) ? arr : arr.reverse();
}
module.exports = get_integer_interval;