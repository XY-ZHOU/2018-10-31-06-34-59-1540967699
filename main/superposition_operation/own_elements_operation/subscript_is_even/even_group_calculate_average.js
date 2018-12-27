'use strict';
var even_group_calculate_average = function(collection) {
  let evenIndexArray = getEvenIndexArray(collection);
  let arrayOfEven = getEvenArray(evenIndexArray);
  if (arrayOfEven.length === 0) {
    return [0];
  }
  let result = [];
  let digitObj = generateDigitObj(arrayOfEven);
  for (let prop in digitObj) {
    if (digitObj[prop].length > 0) {
      result.push(calculateAverage(digitObj[prop]));
    }
  }
  return result;
};

function generateDigitObj(collection) {
  let maxDigit = getMax(collection).toString().length;
  let digitObj = {};
  for (let i = 1; i <= maxDigit; i++) {
    digitObj[i.toString()] = [];
  }
  for (let item of collection) {
    digitObj[item.toString().length].push(item);
  }
  return digitObj;
}

function getMax(collection) {
  return collection.reduce((a, b) => {
    return a > b ? a : b;
  });
}

function getEvenArray(collection) {
  return collection.filter((element) => {
    return element % 2 === 0;
  })
}

function getEvenIndexArray(collection) {
  return collection.filter((element, index) => {
    return index % 2 === 1;
  })
}

function calculateAverage(array) {
  let sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return Math.round(sum / array.length);
}
module.exports = even_group_calculate_average;