/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let map = {
        'a': 0,
        'b': 0,
        'l': 0,
        'n': 0,
        'o': 0
    }
    let str = 'balon';
    for (let character of str) {
        if (!text.includes(character)) {
            return 0;
        }
    }

    for (let character of text) {
        switch (character) {
            case 'a':
                map.a++;
                break;
            case 'b':
                map.b++;
                break;
            case 'l':
                map.l++;
                break;
            case 'n':
                map.n++;
                break;
            case 'o':
                map.o++;
                break;
        }
    }
    map.l = parseInt(map.l / 2);
    map.o = parseInt(map.o / 2);
    return Math.min(map.a, map.b, map.l, map.n, map.o);

};

module.exports = maxNumberOfBalloons;