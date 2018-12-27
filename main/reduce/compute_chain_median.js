'use strict';

function compute_chain_median(chain) {
  let arr = chain.split('->').sort(sortAsc);
  let lowMiddle = Math.floor((arr.length - 1) / 2);
  let highMiddle = Math.ceil((arr.length - 1) / 2);
  return (Number(arr[lowMiddle]) + Number(arr[highMiddle])) / 2;
}

function sortAsc(a, b) {
  return a - b;
}
module.exports = compute_chain_median;