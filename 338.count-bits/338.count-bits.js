/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var arr = [];
    for(let i = 0; i <= num; i++){
        arr.push(i);
    }
    for(let i = 0; i <= num; i++){
        arr[i] = count(i);
    };
    return arr;

};

function count(x) {
    var cut;
    for(cut = 0; x!= 0; cut++){
        x &= x-1;
    }
    return cut;
}

module.exports = countBits;