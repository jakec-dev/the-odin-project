const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(numArray) {
	return numArray.reduce((total, current) => {
    return total * current;
  });
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  if (num === 0) return 1;
	let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  };
  return total;
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
