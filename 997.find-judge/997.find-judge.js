/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let count =  [];
    let judge = -1;
    let j = 0;
    for(let i = 0; i < trust.length; i++){
        count.push(trust[i][0]);
    };
    
    for(let i = 1; i <= N; i++){
        if(!count.includes(i)){
            judge = i;
        }
    }
    
    
    for(let i = 0; i < trust.length;i++){
        if(trust[i][1] === judge){
            j++;
        }
    }
    if(judge !== -1 && (N-j) === 1){
        return judge;
    }
    return -1;
};

module.exports = findJudge;