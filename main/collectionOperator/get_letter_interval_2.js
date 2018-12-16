'use strict';

function get_letter_interval_2(number_a, number_b) {
  if (number_a <= number_b) {
    return outputString(number_a, number_b);
  } else {
    return outputString(number_b, number_a).reverse();
  }
}

function outputString(num_a, num_b) {
  let arr = [];
  for (let i = num_a; i <= num_b; i++) {
    if (i <= 26) {
      arr.push(String.fromCharCode(i + 96));
    } else if (26 < i && i <= 52) {
      arr.push(numberToString(i, 1));
    } else if (52 < i && i <= 78) {
      arr.push(numberToString(i, 2));
    }
  }
  return arr;
}

function numberToString(number, n) {
  return String.fromCharCode(n + 96) + String.fromCharCode(number - 26 * n + 96);
}
module.exports = get_letter_interval_2;