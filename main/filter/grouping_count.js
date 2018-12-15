'use strict';

function grouping_count(collection) {
  let obj={};
  for(let i = 0; i<collection.length; i++) {
    if(judgeKeyInObj(obj, collection[i])){
      obj[collection[i]] = 1 ;
    }else{
      obj[collection[i]]++;
    }
  }
  return obj;
}

function judgeKeyInObj(obj, key) {
  return (!obj.hasOwnProperty(key));
}

module.exports = grouping_count;
