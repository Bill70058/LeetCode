/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    let count = [];
    for(let i = 0,len = arr.length; i < len; i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else {
            map.set(arr[i],0);
        }
    }

    for(let value of map){
        if(count.indexOf(value[1]) === -1){
            count.push(value[1]);
        }
    }
    return count.length === map.size;
};

