function count_same_elements(collection) {
  return covertObjToArray(grouping_count(collection));
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

function covertObjToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element]
    };
  });
}
module.exports = count_same_elements;