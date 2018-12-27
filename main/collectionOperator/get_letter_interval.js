'use strict';

function get_letter_interval(number_a, number_b) {
  let start = (number_a >= number_b) ? number_b : number_a;
  let end = (number_a >= number_b) ? number_a : number_b;
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(String.fromCharCode(i + 96));
  }
  return (number_a <= number_b) ? result : result.reverse();
}
module.exports = get_letter_interval;