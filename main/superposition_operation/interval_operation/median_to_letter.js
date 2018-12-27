'use strict';
const LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function median_to_letter(collection) {
  collection.sort(sortAsc);
  let num = collection[0] + collection.length / 2;
  return getLetterByCode(num);
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

function sortAsc(a, b) {
  return a - b;
}
module.exports = median_to_letter;