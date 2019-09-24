/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    for(let i in J){
        for(let j in S){
            if(J[i] == S[j]){
                count++;
            }
        }
    }
    return count;
};

module.exports = numJewelsInStones;