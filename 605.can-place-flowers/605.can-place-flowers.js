/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        // 判断 i-1 与 i+1 是对数组边界的两种特殊情况进行判断
         if (flowerbed[i] === 0 
         && (i - 1 === -1 || flowerbed[i - 1] === 0) 
         && (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)) {
             n--;
             flowerbed[i] = 1;
         }
     }
     return n <= 0;
};

module.exports = canPlaceFlowers;