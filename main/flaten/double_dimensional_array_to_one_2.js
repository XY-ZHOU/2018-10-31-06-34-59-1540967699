'use strict';

function double_to_one(collection) {
  return [...new Set(double_to_one_of_all(collection))];
}

function double_to_one_of_all(collection) {
  let res=[];
  for (let i = 0; i < collection.length; i++) {
    if(isArrayOrNot(collection[i])){
      outputElements(collection[i],res);
    }else{
      res.push(collection[i]);
    }
  }
  return res;
}

function outputElements(arr,res){
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
}

function isArrayOrNot(arr){
  return (Object.prototype.toString.call(arr) == "[object Array]");
}

module.exports = double_to_one;
