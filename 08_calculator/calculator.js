const add = function(a,b) {
  if (a>=0 && b>=0){
    return a+b; 
  }
  else {
    return ("please use positive numbers");
  }
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let reduced = arr.reduce(function(sum, current) {
     return sum + current;
    }, 0);
  return reduced;
};

const multiply = function(arr) {
  let reduced = arr.reduce((sum, current) => sum*current);
  return reduced;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let result = a === 0 ? 1 : a;
	for (let i = a-1; i>0; i--){
    result = result*i;
  }
  return result
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