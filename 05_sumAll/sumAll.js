const sumAll = function(startValue,endValue) {
    let sum = 0;
    let testNegatives = (startValue < 0 || endValue < 0) ? "ERROR" : 0;

    if (testNegatives === "ERROR"){
        return testNegatives;
    }
    
    if(startValue > endValue){
        for (let i = endValue; i <= startValue; i++){
            sum = sum + i;
        };
        return sum;
    }

    for (let i = startValue; i <= endValue; i++){
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
