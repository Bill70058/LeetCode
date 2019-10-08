/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let temp = [];
    let array = [];
    for(let n of arr1){
        if(!arr2.includes(n)){
            temp.push(n);
        }
    }
    temp.sort((a,b)=>{
        return a-b;
    });
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] == arr1[j]){
                array.push(arr1[j]);
            }
        }
    }
    for(let n of temp){
        array.push(n);
    }
  return array;  
};

// console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6]))
// relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])

module.exports = relativeSortArray;