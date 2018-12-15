'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let commonElementArr = choose_common_elements(collection_a, collection_b);
  return (delateElements(collection_a, commonElementArr).concat(delateElements(collection_b, commonElementArr)));
}

function choose_common_elements(collection_a, collection_b) {
  let res=[];
  for(let i = 0; i<collection_a.length;i++){
    if(judgeStrInArr(collection_b,collection_a[i])){
      res.push(collection_a[i]);
    }
  }
  return res;
}

function delateElements(arr_a, arr_b) {
  for(let i = 0; i<arr_b.length;i++) {
    if(judgeStrInArr(arr_a, arr_b[i])) {
      let index = arr_a.indexOf(arr_b[i]);
      arr_a.splice(index, 1);
    }
  }
  return arr_a;
}

function judgeStrInArr(arr, str) {
  return (arr.indexOf(str) != -1);
}


module.exports = choose_no_common_elements;
