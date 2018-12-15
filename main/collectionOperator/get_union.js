'use strict';

function get_union(collection_a, collection_b) {
  let res=[];
  outputElement(collection_a,res);
  outputElement(collection_b,res);
  return res;
}

function outputElement(arr,res){
  for(let i = 0; i<arr.length; i++) {
    if(judgeStrInArr(res, arr[i])){
      res.push(arr[i]);
    }
  }
}

function judgeStrInArr(array, str) {
  return (array.indexOf(str) == -1);
}

module.exports = get_union;

