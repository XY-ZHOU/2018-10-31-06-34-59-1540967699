function count_same_elements(collection) {
  let res = [];
  let groupingCountObj = grouping_count(collection);
  for (key in groupingCountObj) {
    let obj = {};
    obj.name = key;
    obj.summary = groupingCountObj[key];
    res.push(obj);
  }
  return res;
}

function grouping_count(collection) {
  let groupingCountObj = {};
  for (let i = 0; i < collection.length; i++) {
    if (judgeStr(collection[i])) {
      let str = collection[i].slice(0, 1);
      if (!judgeSummary(groupingCountObj, str)) {
        groupingCountObj[str] = parseInt(collection[i].slice(2));
      } else {
        groupingCountObj[str] += parseInt(collection[i].slice(2));;
      }
    } else {
      if (judgeKeyInObj(groupingCountObj, collection[i])) {
        groupingCountObj[collection[i]] = 1;
      } else {
        groupingCountObj[collection[i]]++;
      }
    }
  }
  return groupingCountObj;
}

function judgeKeyInObj(obj, key) {
  return (!obj.hasOwnProperty(key));
}

function judgeStr(str) {
  var reg = /^([a-z](-|:)\d{1,2})|([a-z]\[\d{1,2}\])$/;
  return reg.test(str);
}

function judgeSummary(obj, key) {
  return obj[key];
}
module.exports = count_same_elements;