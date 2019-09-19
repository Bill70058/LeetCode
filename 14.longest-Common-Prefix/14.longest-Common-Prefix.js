function longestCommonPrefix(strs){
    if (strs.length == 0|| strs == null) return "";
    var prefix = strs[0];                                       //将数组第一个字符串取出
    for (let i = 1; i < strs.length; i++)                       //循环数组第二个字符串开始的数组元素
        while (strs[i].indexOf(prefix) != 0) {                  //如果从数组第二个字符串开始查没有开头就等于第一个字符串的就循环
            prefix = prefix.substring(0, prefix.length - 1);    //将第一个字符串从后往前减少一个字符进入while循环进行比较
            if (prefix.length == 0) return "";                  //如果第一个字符被减少到为空了都没有一样的，就返回空
        }        
    return prefix;                                              //最后将减剩的第一个字符串返回出
}
// var strs = ['ab','abc','ac','bc'];
// let x = longestCommonPrefix(strs);
// console.log(x);

module.exports = longestCommonPrefix;