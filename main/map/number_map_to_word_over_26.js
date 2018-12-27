'use strict';
const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number_map_to_word_over_26 = function(collection) {
  let res = [];
  for (let element of collection) {
    res.push(getLetterByCode(parseInt(element)));
  }
  return res;
};

function getLetterByCode(code) {
  if (code <= LETTER.length) {
    return LETTER[code - 1];
  } else {
    let firstLetter = LETTER[Math.floor((code - 1) / LETTER.length) - 1];
    let secondLetter = LETTER[(code - 1) % LETTER.length];
    return firstLetter + secondLetter;
  }
}
module.exports = number_map_to_word_over_26;