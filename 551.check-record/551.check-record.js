/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var Ls = false;
    var As = false;
    var count = 0;
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'L'){
            if(s[i+1] == 'L' && s[i+2] == 'L'){
                Ls = true;
            }
        }
        if(s[i] == 'A'){
            count++;
        }
    }
    if(count > 1){
        As = true;
    }

    if(Ls ||  As){
        return false;
    }else {
        return true;
    }
};


// console.log(checkRecord('PPALLL'))
module.exports = checkRecord;