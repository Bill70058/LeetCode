/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');
    let count = 0,
        indexOfChar = 0;
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.includes(ransomNote[i])) {
            count++;
            indexOfChar = magazine.indexOf(ransomNote[i]);
            magazine[indexOfChar] = '0';
        }
    }
    return count === ransomNote.length;
};

module.exports = canConstruct;