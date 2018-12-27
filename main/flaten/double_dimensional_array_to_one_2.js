'use strict';

function double_to_one(collection) {
  return [...new Set(double_to_one_of_all(collection))];
}

function double_to_one_of_all(collection) {
  return collection.reduce(function(acc, cur) {
    return acc.concat(cur);
  }, []);
}
module.exports = double_to_one;