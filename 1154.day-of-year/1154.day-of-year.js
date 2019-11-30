/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let times = date.split('-');
    let year = Number(times[0]),
        month = Number(times[1]),
        days = Number(times[2]);
    let sum = 0;

    //判断是否闰年，是的话2月天数改变
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        months[1] = 29;
    }
    for (let i = 0; i < month - 1; i++) {
        sum += months[i];
    }
    sum += days;
    return sum;
};


module.exports = dayOfYear;