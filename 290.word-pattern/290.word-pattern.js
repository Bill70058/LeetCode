/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function (pattern, str) {
    let strArr = str.split(' ')
    if (pattern.length !== strArr.length) return false

    let patternMap = new Map()
    let strArrMap = new Map()

    for (let i = 0; i < pattern.length; i++) {
        let getPatternMap = patternMap.get(pattern[i])
        let getStrArrMap = strArrMap.get(strArr[i])
        if (!getPatternMap) {
            patternMap.set(pattern[i], strArr[i])
        } else if (getPatternMap !== strArr[i]) {
            return false
        }

        if (!getStrArrMap) {
            strArrMap.set(strArr[i], pattern[i])
        } else if (getStrArrMap !== pattern[i]) {
            return false
        }
    }

    return true
};

module.exports = wordPattern;