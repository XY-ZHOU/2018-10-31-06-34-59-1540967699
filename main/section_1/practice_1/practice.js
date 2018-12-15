function collect_same_elements(collection_a, collection_b) {
  let res=[];
  for(let i = 0; i<collection_a.length;i++){
    if(judgeStrInArr(collection_b,collection_a[i])){
      res.push(collection_a[i]);
    }
  }
  return res;
}

function judgeStrInArr(arr, str) {
  return (arr.indexOf(str) != -1);
}

module.exports = collect_same_elements;
