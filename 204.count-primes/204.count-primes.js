/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(number) {
    let isPrimes = Array(number).fill(true);
    let count = 0;
    for(let i = 2; i*i < number; i++){
        if(isPrimes[i]){
            for(let j = i*i; j < number; j+=i){
                isPrimes[j] = false;
            }
        }
    }

    for(let i = 2; i < number; i++){
        if(isPrimes[i]){
            count++;
        }
    }
    return count;
};

module.exports = countPrimes;