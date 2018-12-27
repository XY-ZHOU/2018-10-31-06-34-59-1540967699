'use strict';
const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function get_letter_interval_2(number_a, number_b) {
  let start = (number_a >= number_b) ? number_b : number_a;
  let end = (number_a >= number_b) ? number_a : number_b;
  let result = [];
  for (; start <= end; start++) {
    result.push(getLetterByCode(start));
  }
  return (number_a <= number_b) ? result : result.reverse();
}

function getLetterByCode(code) {
  if (code <= LETTER.length) {
    return LETTER[code - 1];
  } else {
    let firstLetter = LETTER[Math.floor((code - 1) / LETTER.length) - 1];
    let secondLetter = LETTER[(code - 1) % LETTER.length];
    return firstLetter + secondLetter;
  }
}
module.exports = get_letter_interval_2;