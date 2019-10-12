/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let up = 0,down = 0,left = 0,right = 0;
    for(let i = 0; i < moves.length; i++){
        switch(moves.charAt(i)){
            case 'U':
                up++;
                break;
            case 'D':
                down++;
                break;
            case 'L':
                left++;
                break;
            case 'R':
                right++;
                break;
            default:
                break;
        }
    }
    if((up-down !== 0) || (left-right !== 0)){
        return false;
    }else {
        return true;
    }
};

module.exports = judgeCircle;