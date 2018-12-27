function count_same_elements(collection) {
  return covertObjToArray(groupingCount(collection));
}

function groupingCount(collection) {
  let count = {};
  collection.map((element) => {
    let key = element.match(/[a-zA-Z]+/g)[0];
    let matchValue = element.match(/[0-9]+/g);
    let summary = matchValue ? matchValue : 1;
    if (count[key]) {
      count[key] += parseInt(summary);
    } else {
      count[key] = parseInt(summary);
    }
  })
  return count;
}

function covertObjToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      name: element,
      summary: obj[element]
    };
  });
}
module.exports = count_same_elements;