const fibonacci = function(n) {

    if( n < 0 ) return "OOPS"
    let initial = 1;
    let next = 0;
    let result = 0;
    for (let i = 0; i < n; i++){
      result = initial + next;
      initial = next;
      next = result;
    }
    return result;
};
  
  console.log(fibonacci(6));
  
  
  
  // Do not edit below this line
module.exports = fibonacci;