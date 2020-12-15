var monotoneIncreasingDigits = function (N) {
  const strN = N.toString().split('').map(v => +v);
  let i = 1;
  // 循环检查是否递增
  while (i < strN.length && strN[i - 1] <= strN[i]) {
    i += 1;
  }
  // 上面的检查是否中断，处理[i-1,N]
  if (i < strN.length) {
    // 如果是中断则判断是否递减，如果是则循环前一位减一
    // i为没递减断点的下标，例如2879，断点是2，因为str[2] < str[1]
    // 这里进行接触N的限制位；str[2] -= 1 => str[2] = 7，断点下标减一
    while (i > 0 && strN[i - 1] > strN[i]) {
      strN[i - 1] -= 1;
      i -= 1;
    }
    // 循环开始断点进一，strN[i+=1] => str[2] = 9, str[3] = 9
    for (i += 1; i < strN.length; ++i) {
      strN[i] = 9;
    }
    // 置9后的输出为2799
  }
  return parseInt(strN.join(''));
};

export default monotoneIncreasingDigits