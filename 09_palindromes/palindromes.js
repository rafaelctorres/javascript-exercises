const palindromes = function (string) {

    let forward = string;
    let backwards;
    let toArray = forward.split('');
    const format =  ` /^[!@#$%^&*()_+-=};':" |,.<>?]*$/ `;
    
    //reduce the array removing spaces and special characters:
    //reduce was chosen over forEach with splice because
    //it would cause the iteration to skip a character when
    //a special character was found.
    let reduced = toArray.reduce(function(sum,current){
      if (current.match(format)){
        return sum + '';
      } else {
        return sum + current;
      }
    },'');
    
    reduced = reduced.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    
    forward = reduced.split('').join('');
    backwards = reduced.split('').reverse().join('');
    
    //to remove upperCase unequality
    if (forward.toUpperCase() === backwards.toUpperCase()){
      return true;
    } else{
      return false;
    }
};
    
    console.log(palindromes('Animal loots foliated detail of stool lamina.'));
    console.log(palindromes(`racecar!`));
    
    
    
    
    
    // Do not edit below this line
    module.exports = palindromes;
    
    /* first: unconsider punctuation and spaces:
    then, put string backwards and see if equal
    to that, make a copy of the string*/