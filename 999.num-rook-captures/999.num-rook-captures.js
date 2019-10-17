/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let index = [];
    let count = 0;
    let up,down,left,right;
    // up = down = left = right = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'R'){
                index.push(i);
                index.push(j);
            }
        }
    }
    
    for(up = index[1]-1; up >= 0; up--){
        if(board[index[0]][up] !== '.' && board[index[0]][up] === 'p'){
                count++;    
            break;
        }
        if(board[index[0]][up] === 'B' || board[index[0]][up] === 'R'){
            break;
        }
    }
    
    for(down = index[1]+1;down < board.length;down++){
        if(board[index[0]][down] !== '.' && board[index[0]][down] === 'p'){
            count++;
            break;
        }
        if(board[index[0]][down] === 'B' || board[index[0]][down] === 'R'){
            break;
        }
    }
    
    for(left = index[0]-1; left >= 0; left--){
        if(board[left][index[1]] !== '.' && board[left][index[1]] === 'p'){
            count++;
            break;
        }
        if(board[left][index[1]] === 'B' || board[left][index[1]] === 'R'){
            break;
        }
    }
    
    for(right = index[0]+1; right < board[0].length; right++){
    if(board[right][index[1]] !== '.' && board[right][index[1]] === 'p'){
        count++;
        break;
        }
    if(board[right][index[1]] === 'B' || board[right][index[1]] === 'R'){
        break;
        }
    }
    
    return count;
};


module.exports = numRookCaptures;