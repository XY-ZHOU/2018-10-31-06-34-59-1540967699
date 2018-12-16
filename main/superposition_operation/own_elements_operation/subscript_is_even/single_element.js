'use strict';
var single_element = function(collection) {
  let res = [];
  let arr = new Array(collection.length / 2);
  for (let i = 1; i < collection.length; i += 2) {
    arr[parseInt(i / 2)] = collection[i];
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (arr.lastIndexOf(num) === arr.indexOf(num)) {
      res.push(num);
    }
  }
  return res;
};
module.exports = single_element;