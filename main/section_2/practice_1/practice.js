function count_same_elements(collection) {
  return covertObjToArray(grouping_count(collection));
}

function grouping_count(collection) {
  let countObj = {};
  collection.map((element) => {
    if (countObj[element]) {
      countObj[element] = parseInt(countObj[element]) + 1;
    } else {
      countObj[element] = 1;
    }
  });
  return countObj;
}

function covertObjToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element]
    };
  });
}
module.exports = count_same_elements;