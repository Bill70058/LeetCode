/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    let answer = [];
    for(let i = 0; i < cpdomains.length; i++){
        let [num,url] = cpdomains[i].split(' ');
        while(url.includes('.')){
            if(map.has(url)){
                map.set(url, Number(map.get(url)) + Number(num) );
            }else {
                map.set(url,num);
            }
            
            url = url.slice(url.indexOf('.') + 1);
            
        }
        if(map.has(url)){
            map.set(url, Number(map.get(url)) + Number(num) );
        }else {
            map.set(url,num);
        }
    }
    map.forEach((value, key) => {
        answer.push(`${value} ${key}`);
    })
    return answer;
};

module.exports = subdomainVisits;