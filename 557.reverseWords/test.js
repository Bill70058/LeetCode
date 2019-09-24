var reverseWords = function() {
    var s = "Let's take LeetCode contest";
    var sArr = [];
    var index = [0];
    var newArr = [];
    for(let i = 0; i < s.length; i++){
        sArr.push(s[i]);
        if(sArr[i] == ' '){
            index.push(i);
        }
    }
    index.push(s.length-1);
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] == ' '){
            sArr[i] = '';
        }
    }
    console.log(sArr);
    // console.log(index);
    for(let i = 1; i < index.length; i++){
        
        newArr.push(sArr.slice(index[i-1],index[i]).reverse());
    }


    console.log(newArr);
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

reverseWords();
// console.log(reverseWords());