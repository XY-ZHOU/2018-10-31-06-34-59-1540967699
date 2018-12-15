'use strict';
var rank_asc = function(collection) {
  for (let i = 0; i < collection.length - 1; i++) {　　　　
    for (let j = 0; j < collection.length - 1 - i; j++) {　　　　　　
      if (collection[j] < collection[j + 1]) {　　　　　　　　
        let temp = collection[j];　　　　　　　　
        collection[j] = collection[j + 1];　　　　　　　　
        collection[j + 1] = temp;　　　　　　　　
      }　　　　　　
    }　　　　
  }
  return collection;
}
module.exports = rank_asc;
