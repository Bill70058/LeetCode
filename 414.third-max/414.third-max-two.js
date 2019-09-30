/**
 * @param {number} max1 - 正数最大的数
 * @param {number} max2 - 倒数第二大的数
 * @param {number} max3 - 倒数第三大的数
 */
var thirdMaxTWO = function(nums) {
    var max1,max2,max3;
    max1 = max2 = max3 = Number.MIN_SAFE_INTEGER;
    for(i of nums){
        max1 = Math.max(max1,i);
    }
    for(i of nums){
        if(i != max1){
            max2 = Math.max(max2,i);
        }
    }
    for(i of nums){
        if(i != max1 && i != max2){
            if(i > max3){
                max3 = i;
            }
        }
    }
    return (max3!== Number.MIN_SAFE_INTEGER)?max3:max1;
}

module.exports = thirdMaxTWO;