function collect_same_elements(collection_a, collection_b) {
  let arr = double_to_one(collection_b);
  return collection_a.filter(function(element) {
    return arr.indexOf(element) != -1;
  });
}

function double_to_one(collection) {
  return collection.reduce(function(acc, cur) {
    return acc.concat(cur);
  }, []);
}
module.exports = collect_same_elements;