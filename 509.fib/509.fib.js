/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    // if(N === 0 ){
    //     return N;
    // }
    // let a1 = 0,a2 = 1;
    // for(let i = 1; i < N; i++){
    //     [a1,a2] = [a2,a1+a2]; // => a2 = a1+a2; a1 = a2-a1;
    // }
    // return a2;

    if(N === 1|| N === 2){
        return 1;
    }
    return fib(N-1)+fib(N-2);
};

module.exports = fib;

console.log(fib(3));