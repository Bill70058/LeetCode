/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(totalPeople, trust) {
    let count =  [];
    let judgeIndex = -1;
    let believeJudgePeople = 0;
    for(let i = 0; i < trust.length; i++){
        count.push(trust[i][0]);
    };
    
    for(let i = 1; i <= totalPeople; i++){
        if(!count.includes(i)){
            judgeIndex = i;
        }
    }
    
    
    for(let i = 0; i < trust.length;i++){
        if(trust[i][1] === judgeIndex){
            believeJudgePeople++;
        }
    }
    if(judgeIndex !== -1 && (totalPeople-believeJudgePeople) === 1){
        return judgeIndex;
    }
    return -1;
};

module.exports = findJudge;