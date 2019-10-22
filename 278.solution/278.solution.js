/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(number) {
        let lower = 1,height = number;
        let mid;
        while(lower < height){
            //这里加上左边界是为了防止边界溢出
            mid = lower + parseInt((height - lower)/2);
            if(isBadVersion(mid)){
                height = mid;
            }else {
                lower = mid + 1;
            }
        }
        return height;
    };
};

function isBadVersion(version) {
    let badVersion = 4;
    return version === badVersion;
}
