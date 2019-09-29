/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //var n = s.split(' ') --> [ 's\'teL', 'ekat', 'edoCteeL', 'tsetnoc' ]
    
    return s.split(' ').map(item=>{
        //item.split('')           --> [ 'L', 'e', 't', '\'', 's' ] ....
        //item.split('').reverse() --> [ 's', '\'', 't', 'e', 'L' ] ....
        //item.split('').reverse().join('') --> 's'teL'
        //s.split(' ').join(' ');  --> s'teL ekat edoCteeL tsetnoc
        return item.split('').reverse().join('');
    }).join(' ');
};

module.exports = reverseWords;