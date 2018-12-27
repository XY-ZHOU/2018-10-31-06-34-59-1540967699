function collect_same_elements(collection_a, object_b) {
  let res = [];
  for (let i = 0; i < collection_a.length; i++) {
    if (judgeStrInArr(object_b.value, collection_a[i].key)) {
      res.push(collection_a[i].key);
    }
  }
  return res;
}

function judgeStrInArr(arr, str) {
  return (arr.indexOf(str) != -1);
}
module.exports = collect_same_elements;