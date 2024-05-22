const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array1) {
  return array1.reduce((total, current) => total + current, 0);
};

// How to use .reduce
// total = accumulated value previously returned in last invocation
// current = the current element being processed
// 0 = the initial value

const multiply = function(array1) {
  return array1.reduce((total, current) => total * current, 1)
};

const power = function(num1, num2) {
  return Math.pow(num1, num2)
};

const factorial = function(num) {
  if (num == 1) {
    return 1;
  }
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
