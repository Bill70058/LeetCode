/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function(s) {
    s = s.split(' ');
    for(let i = 0,len = s.length; i < len; i++){
        if(s[i] === ''){
            s.splice(i,1);
            i--;
        }
    }
    return s.length;
};

// countSegments("Of all the gin joints in all the towns in all the world,   ")
module.exports = countSegments;