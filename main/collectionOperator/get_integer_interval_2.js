'use strict';

function get_integer_interval_2(number_a, number_b) {
  let arr = [];
  if (compare(number_a, number_b)) {
    for (let i = number_a; i >= number_b; i--) {
      if(judgeEven(i)){
        arr.push(i);
      }
    }
  } else {
    for (let i = number_a; i <= number_b; i++) {
      if(judgeEven(i)){
        arr.push(i);
      }
    }
  }
  return arr;
}

function compare(num_a, num_b) {
  return (num_a - num_b >= 0);
}

function judgeEven(num){
  return num%2 == 0;
}

module.exports = get_integer_interval_2;
