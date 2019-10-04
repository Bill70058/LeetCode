/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num <= 0){
        return false;
    }
    while(num){
        let temp = num;
        if(num % 2 == 0){
            num = parseInt(num) / 2;
        }
        if(num % 3 == 0){
             num = parseInt(num) / 3;
        }
        if(num % 5 == 0){
             num = parseInt(num) / 5;
        }
        if(num == 1){
            return true;
        }
        if(temp == num){
            return false;
        }
    }
    
};

// console.log(isUgly(6));

module.exports = isUgly;