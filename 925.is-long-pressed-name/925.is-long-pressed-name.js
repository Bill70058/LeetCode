/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    if (name === typed) {
        return true
    };
    if (name.length > typed.length) {
        return false
    };
    let i = 0,
        j = 0;
    while (name[i] && typed[j]) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === name.length;
};

module.exports = isLongPressedName;