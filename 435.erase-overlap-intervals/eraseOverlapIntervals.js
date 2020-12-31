var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) {
    return 0;
  }

  intervals.sort((a, b) => a[1] - b[1]);

  let x_end = intervals[0][1];
  let count = 1;

  for (let item of intervals) {
    if (item[0] >= x_end) {
      count++
      x_end = item[1]
    }
  }
  return intervals.length - count;
};

export default eraseOverlapIntervals