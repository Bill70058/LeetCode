/**
 * @param {number[]} nums
 * @return {number}
 */
var  removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length-1; i++){
     for(let j = 0; j < nums.length-i-1; j++){
         if(nums[j]==nums[j+1]){
             nums.splice(j+1,1);
         }
     }
 }
     for(let a = 0;a < nums.length-1 ; a++){
         for(let b = 0; b < nums.length-a-1; b++){
             if(nums[b]!=nums[b+1]){
                 ;
             }else {
                 return removeDuplicates(nums);
             }
         }
     }
     return nums.length;
 };

console.log(removeDuplicates([1,1,2]));


module.exports = removeDuplicates;