/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var arrays = [];
    var returnArray = [];
    for(let i = 0,len = words.length; i < len; i++){
        let arr = words[i].split('');
        let str = '';
        for(n of arr){
            index = n.charCodeAt() - 97;
            str += morse[index];
        }
        arrays.push(str);
    }
  for(n of arrays){
      if(returnArray.indexOf(n) == -1){
          returnArray.push(n);
      }
  }
  return returnArray.length;
};


module.exports = uniqueMorseRepresentations;

// uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);