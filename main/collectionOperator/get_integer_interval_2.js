'use strict';

function get_integer_interval_2(number_a, number_b) {
  let start = (number_a >= number_b) ? number_b : number_a;
  let end = (number_a >= number_b) ? number_a : number_b;
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  let result = arr.filter(function(element) {
    return element % 2 === 0;
  });
  return (number_a <= number_b) ? result : result.reverse();
}
module.exports = get_integer_interval_2;