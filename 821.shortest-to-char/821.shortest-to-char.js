/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(Strings, Character) {
    let answer = [];
    let record = Number.MIN_SAFE_INTEGER/2;
    for(let i = 0; i < Strings.length; i++){
        if(Strings.charAt(i) === Character){
            record = i;
        }
        answer.push(i-record);
    }
    
    record = Number.MAX_SAFE_INTEGER/2;
    for(let j = Strings.length-1; j >= 0; j--){
        if(Strings.charAt(j) === Character){
            record = j;
        }
        answer[j] = Math.min(answer[j],record-j);
    }
    return answer;
};

module.exports = shortestToChar;