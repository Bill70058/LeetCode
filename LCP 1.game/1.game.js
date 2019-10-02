/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    var count = 0;
    for(let i = 0; i < guess.length; i++){
        if(guess[i] == answer[i]){
            count++;
        }
    }  
    return count;
};

module.exports = game;