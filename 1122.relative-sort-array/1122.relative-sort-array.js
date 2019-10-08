/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
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
            if(arr2[i] === arr1[j]){
                array.push(arr1[j]);
            }
        }
    }
    for(let n of temp){
        array.push(n);
    }
  return array;  
};


module.exports = relativeSortArray;