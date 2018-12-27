function create_updated_collection(collection_a, object_b) {
  return covertObjToArray(fullThreeMinusOne(grouping_count(collection_a), object_b));
}

function grouping_count(collection) {
  let countObj = {};
  collection.map((element) => {
    let key = element.match(/[a-zA-Z]+/g)[0];
    let matchValue = element.match(/[0-9]+/g);
    let count = matchValue ? matchValue : 1;
    if (countObj[key]) {
      countObj[key] += parseInt(count);
    } else {
      countObj[key] = parseInt(count);
    }
  })
  return countObj;
}

function fullThreeMinusOne(obj, object_b) {
  for (let key in obj) {
    if (isElementsExist(object_b.value, key)) {
      obj[key] = obj[key] - parseInt(obj[key] / 3);
    }
  }
  return obj;
}

function isElementsExist(arr, str) {
  return arr.includes(str);
}

function covertObjToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element]
    };
  });
}
module.exports = create_updated_collection;