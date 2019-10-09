/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0;
    g.sort((a,b)=>{
        return a-b;
    });
    s.sort((a,b)=>{
        return a-b;
    });
    g.forEach((element)=>{
        while(s.length){
            if(element <= s.shift()){
                count++;
                break;
            }
        }
    })
    return count;
};

module.exports = findContentChildren;