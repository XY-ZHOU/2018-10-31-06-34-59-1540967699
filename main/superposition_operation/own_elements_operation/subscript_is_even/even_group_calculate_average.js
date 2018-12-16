'use strict';
var even_group_calculate_average = function(collection) {
  let res = [];
  let arr = new Array(parseInt(collection.length / 2));
  let evenArr = [];
  chooseEvenElemts(collection, arr);
  chooseEven(arr, evenArr);
  if (evenArr == false) {
    res.push(0);
  } else {
    let sum_one = 0;
    let sum_two = 0;
    let sum_three = 0;
    let count_one = 0;
    let count_two = 0;
    let count_three = 0;
    for (let i = 0; i < evenArr.length; i++) {
      if (compare(evenArr[i], 10)) {
        sum_one += evenArr[i];
        count_one++;
      } else if (compare(evenArr[i], 100)) {
        sum_two += evenArr[i];
        count_two++;
      } else if (compare(evenArr[i], 1000)) {
        sum_three += evenArr[i];
        count_three++;
      }
    }
    if (sum_one == 0 && sum_two == 0) {
      res.push(sum_three / count_three);
    } else {
      res.push(sum_one / count_one);
      res.push(sum_two / count_two);
      res.push(sum_three / count_three);
    }
  }
  return res;
}

function chooseEvenElemts(collection, arr) {
  for (let i = 1; i < collection.length; i += 2) {
    arr[parseInt(i / 2)] = collection[i];
  }
}

function chooseEven(arr, evenArr) {
  for (let i = 0; i < arr.length; i++) {
    if (judgeEven(arr[i])) {
      evenArr.push(arr[i]);
    }
  }
}

function judgeEven(num) {
  return num % 2 == 0;
}

function compare(num_a, num_b) {
  return num_a < num_b;
}
module.exports = even_group_calculate_average;