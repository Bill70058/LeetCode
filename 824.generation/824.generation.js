/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    //每个单词都以空格分割，再逐个分割
    let map = ['a','e','i','o','u','A','E','I','O','U'];
    let Sstr = S.split(' ');
    for(let i = 0; i < Sstr.length; i++){
        let str = Sstr[i].split('');
        if(map.includes(str[0])){
            str.push('ma');
        }else {
            let first = str.shift();
            str.push(first);
            str.push('ma');
        }
        Sstr[i] = str.join('');
    }

    for(let i = 0; i < Sstr.length; i++){
        Sstr[i] += GenerationA(i);
    }

    return Sstr.join(' ');
};

function GenerationA(index){
    let a = '';
    for(let i = 0; i <= index; i++){
        a+='a';
    }
    return a;
}

module.exports = toGoatLatin;