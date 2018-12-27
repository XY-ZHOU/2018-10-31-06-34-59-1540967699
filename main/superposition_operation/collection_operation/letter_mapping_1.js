'use strict';

function even_to_letter(collection) {
  let res = collect_all_odd(collection);
  for (let element of collection) {
    element = String.fromCharCode(element);
  }
  return res;
}

function collect_all_odd(collection) {
  return collection.filter(function(element) {
    return element % 2 != 0;
  });
}
module.exports = even_to_letter;