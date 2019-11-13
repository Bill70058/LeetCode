/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let map = {
        5: 0,
        10: 0,
        20: 0
    };
    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                map[5]++;
                break;
            case 10:
                if (map[5] > 0) {
                    map[5]--;
                } else {
                    return false;
                }
                map[10]++;
                break;
            case 20:
                if (map[10] > 0 && map[5] > 0) {
                    map[10]--;
                    map[5]--;
                } else if (map[10] === 0 && map[5] > 2) {
                    map[5] -= 3;
                } else {
                    return false;
                }
                map[20]++;
                break;
        }
    }
    return true;
};

module.exports = lemonadeChange;