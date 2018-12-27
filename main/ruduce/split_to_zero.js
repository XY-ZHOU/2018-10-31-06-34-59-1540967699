'use strict';

function spilt_to_zero(number, interval) {
  let arr = [];
  arr.push(number);
  while (number > 0) {
    number = Number((number - interval).toFixed(1));
    arr.push(number);
  }
  return arr;
}
module.exports = spilt_to_zero;