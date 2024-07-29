const helloWorld = function() {
  return "Hello, World!"
};

const returnedValue = helloWorld();

console.log(returnedValue);
console.log(helloWorld);

module.exports = helloWorld;
