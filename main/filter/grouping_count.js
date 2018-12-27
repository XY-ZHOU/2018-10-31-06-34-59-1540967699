'use strict';

function grouping_count(collection) {
  let obj = {};
  for (let element of collection) {
    if (judgeKeyInObj(obj, element)) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  }
  return obj;
}

function judgeKeyInObj(obj, key) {
  return (!obj.hasOwnProperty(key));
}
module.exports = grouping_count;