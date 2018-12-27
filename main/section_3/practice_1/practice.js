function create_updated_collection(collection_a, object_b) {
  for (let element of collection_a) {
    if (isElementsExist(object_b.value, element.key)) {
      element.count--;
    }
  }
  return collection_a;
}

function isElementsExist(arr, str) {
  return arr.includes(str);
}
module.exports = create_updated_collection;