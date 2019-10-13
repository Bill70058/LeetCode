/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let temp = [];
    S = S.split('');
    for(let i = 0,len = S.length; i < len; i++){
        if(isCharacter(S[i])){
            temp.push(S[i]);
        }
    }
    temp = temp.reverse();
    for(let i = 0,len = S.length; i < len; i++){
        if(isCharacter(S[i])){
            S[i] = temp.shift();
        }else{
            ;
        }
    }

    return S.join('');
};

function isCharacter(char) {
    if(((char.charCodeAt() >= 65)&&(char.charCodeAt() <= 90))||((char.charCodeAt() >= 97)&&(char.charCodeAt() <= 122))){
        return true
    }
    return false;
}

module.exports = reverseOnlyLetters;