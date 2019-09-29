/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var cnt = 0;
    while (x != 0 || y != 0) {
        // console.log('x ' + x + ' y '+ y);
        if ((x & 1) != (y & 1)) {
            cnt++;
        }
        x >>= 1;
        y >>= 1;
    }
    return cnt;
};

module.exports = hammingDistance;