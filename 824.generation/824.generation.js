/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    //每个单词都以空格分割，再逐个分割
    let map = ['a','e','i','o','u','A','E','I','O','U'];
    let SToArray = S.split(' ');
    for(let i = 0; i < SToArray.length; i++){
        let str = SToArray[i].split('');
        if(map.includes(str[0])){
            str.push('ma');
        }else {
            let first = str.shift();
            str.push(first);
            str.push('ma');
        }
        SToArray[i] = str.join('');
    }

    for(let i = 0; i < SToArray.length; i++){
        SToArray[i] += GenerationA(i);
    }

    return SToArray.join(' ');
};

function generationA(index){
    let a = 'a';
    return a.repeat(index);
}

module.exports = toGoatLatin;