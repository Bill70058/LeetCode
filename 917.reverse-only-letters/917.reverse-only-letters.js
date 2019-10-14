/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let interchangeArray = [];
    let SCopy = S.split('');
    for(let i = 0,len = SCopy.length; i < len; i++){
        if(isCharacter(SCopy[i])){
            interchangeArray.push(SCopy[i]);
        }
    }
    interchangeArray = interchangeArray.reverse();
    for(let i = 0,len = SCopy.length; i < len; i++){
        if(isCharacter(SCopy[i])){
            SCopy[i] = interchangeArray.shift();
        }
    }

    return SCopy.join('');
};

function isCharacter(char) {
   return (((char.charCodeAt() >= 65)&&(char.charCodeAt() <= 90))||((char.charCodeAt() >= 97)&&(char.charCodeAt() <= 122)));

}

module.exports = reverseOnlyLetters;