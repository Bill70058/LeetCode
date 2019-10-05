/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N === 0 ){
        return N;
    }
    let a1 = 0,a2 = 1;
    for(let i = 1; i < N; i++){
        [a1,a2] = [a2,a1+a2]; // => a2 = a1+a2; a1 = a2-a1;
    }
    return a2;
};

module.exports = fib;