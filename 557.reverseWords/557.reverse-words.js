var reverseWords = function() {
    var str = "Let's take LeetCode contest";
    var newStr = '';
    var index = returnBlankArray(str);
    // console.log('index is '+index);
    for(let i = 1; i < index.length; i++){
        let s = str.slice(index[i-1],index[i]);
        s = reverseString(s);
        console.log('s is '+s);
        newStr+=s;
        console.log('newStr is ' + newStr);
    }
    return newStr;
}

function returnBlankArray(str) {
    // var str = "Let's take LeetCode contest";
    var index = [0];
    for(let i = 0; i < str.length; i++){
        if(str[i] == ' '){
            index.push(i);
        }
    }
    index.push(str.length);
    return index;
}
function reverseString (s) {
    // var s = 'Let`s';
    var L = s.length-1;
    var sArr = [];
    var newStr = '';
    for(let i = 0; i < s.length; i++){
        sArr.push(s[i]);
    }
    for(let i = 0; i < s.length/2; i++){
        let temp = sArr[i];
        sArr[i] = sArr[L];
        sArr[L] = temp;
        L--;
    }
    for(let i = 0; i < sArr.length; i++){
        newStr += sArr[i];
    }
    return newStr;
}

console.log(reverseWords());