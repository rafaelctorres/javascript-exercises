const removeFromArray = function(array, ...rest) {
//  let resultArray = array;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < rest.length; j++){
            console.log(array[i]);
            console.log(rest[j]);
            console.log("iteration starts   ")
            if (array[i] === rest[j]){
 
                
                array.splice(i,1);
                i=i-1;
                console.log("spliced!" + array);
            }
        }
    }

    return array;

};

console.log("the result is: " + removeFromArray([1,2,3,4,5],1,2,3,4));

// Do not edit below this line
module.exports = removeFromArray;
