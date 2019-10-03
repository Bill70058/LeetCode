/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    //如果因数组长度原因无法转换则返回原数组
    const targetLength = r*c;
    const trueLength = nums.length * nums[0].length;
    if (nums.length == 0 || targetLength != trueLength)
            return nums;
    var arr = [];
    var arrs = new Array(r);
    
    for(let i = 0; i <r ; i++){
        arrs[i] = new Array(c);
    }
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[0].length; j++){
            arr.push(nums[i][j]);
        }
    }
    
    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            arrs[i][j] = arr.shift();
        }
    }
    
    return arrs;
    
};

module.exports = matrixReshape;