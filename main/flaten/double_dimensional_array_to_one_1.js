'use strict';

function double_to_one(collection) {
  return collection.reduce(function(acc, cur) {
    return acc.concat(cur);
  }, []);
}
module.exports = double_to_one;