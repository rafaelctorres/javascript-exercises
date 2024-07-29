const reverseString = function(string) {
    let resultString = '';
    let stringArray = string.split("");

    for (let i = (stringArray.length - 1); i >= 0; i--){
        resultString = resultString.concat(stringArray[i]);
    }

    return resultString;



};

// Do not edit below this line
module.exports = reverseString;
