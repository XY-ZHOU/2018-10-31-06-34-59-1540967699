function create_updated_collection(collection_a, object_b) {
  let countSameElemArr = count_same_elements(collection_a);
  for (let i = 0; i < countSameElemArr.length; i++) {
    if (judgeElementsExist(object_b.value, countSameElemArr[i].key)) {
      countSameElemArr[i].count = countSameElemArr[i].count - parseInt(countSameElemArr[i].count / 3);
    }
  }
  return countSameElemArr;
}

function judgeElementsExist(str_a, str_b) {
  return str_a.indexOf(str_b) != -1;
}

function count_same_elements(collection) {
  let res = [];
  let groupingCountObj = grouping_count(collection);
  for (key in groupingCountObj) {
    let obj = {};
    obj.key = key;
    obj.count = groupingCountObj[key];
    res.push(obj);
  }
  return res;
}

function grouping_count(collection) {
  let groupingCountObj = {};
  for (let i = 0; i < collection.length; i++) {
    if (judgeKeyInObj(groupingCountObj, collection[i])) {
      groupingCountObj[collection[i]] = 1;
    } else {
      groupingCountObj[collection[i]]++;
    }
  }
  return groupingCountObj;
}

function judgeKeyInObj(obj, key) {
  return (!obj.hasOwnProperty(key));
}
module.exports = create_updated_collection;