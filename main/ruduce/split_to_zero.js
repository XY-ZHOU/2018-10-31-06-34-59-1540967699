'use strict';
function spilt_to_zero(number, interval) {
  let num=number;
  let arr=[];
  arr.push(num);
  while(num>0) {
    num=Number((num-interval).toFixed(1));
    arr.push(num);
  }
  return arr;
}
module.exports = spilt_to_zero;
