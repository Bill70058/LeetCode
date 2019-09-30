/**
 * @param {number[]} nums
 * @param {number} bool - 计数器
 * @return {number}
 */
var thirdMaxOne = function(nums) {
    if(nums.length == 0) {
        return 0;
    }
    nums.sort((a,b)=>{
        return a-b;
    });
    var count = [];
    for(let i = 0; i < nums.length; i++){
        let bool = 0;
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                bool = 1;
            }
        }
        if(bool == 0){
            count.push(nums[i]);
        }
    }
    if(count.length < 3){
        if(count.length == 2){
            return count[0]>count[1]?count[0]:count[1];
        }else{
            return count[0];
        }
    }else{
        let n = count.length-3;
        return count[n];
    }
};




module.exports = thirdMaxOne;


// console.log(thirdMax([3,2,1]))
// thirdMax([3,2,1])