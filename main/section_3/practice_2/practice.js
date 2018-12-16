function create_updated_collection(collection_a, object_b) {
  for (let i = 0; i < collection_a.length; i++) {
    if (judgeElementsExist(object_b.value, collection_a[i].key)) {
      collection_a[i].count = collection_a[i].count - parseInt(collection_a[i].count / 3);
    }
  }
  return collection_a;
}

function judgeElementsExist(str_a, str_b) {
  return str_a.indexOf(str_b) != -1;
}
module.exports = create_updated_collection;