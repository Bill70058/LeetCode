/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let answer = [];
    let temp = [];
    let min = 0;
    let max = S.length;
    for(let i = 0; i <= S.length; i++){
        temp.push(i);
    }
    console.log(temp);
    for(let i = 0; i < S.length; i++){
        if(S.charAt(i) === 'I'){
            answer.push(temp[min]);
            min++;
        }else {
            answer.push(temp[max]);
            max--;
        }
    }
    answer.push(min);
    return answer;
    
};

module.exports = diStringMatch;