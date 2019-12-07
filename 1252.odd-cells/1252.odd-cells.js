/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    // 将行和列单独提出来，分别进行更改。即假设行和列互不影响
    let r = Array.from({length:n},()=>true);
    let c = Array.from({length:m},()=>true);
    
    for(let i = 0; i < indices.length; i++){
        r[indices[i][0]] = !r[indices[i][0]];
        c[indices[i][1]] = !c[indices[i][1]];
    }
    //对某一行（或某一列）进行若干次加一后，要么全为奇数，要么全为偶数
    let rr = 0,cc = 0;
    for(let i = 0; i < r.length; i++){
        if(r[i]) rr++;
    }
    for(let j = 0; j < c.length; j++){
        if(c[j])cc++;
    }
    //由于一行和一列必然有一个交集，而交集部分会被重复加一使奇偶性颠倒，故要剪掉2*rr*cc
    return rr*m + cc*n -rr*cc*2;
};

module.exports = oddCells;