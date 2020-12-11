/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let len = senate.length
    const radiant = [], dire = []
    for (let i = 0; i < len; i++) {
        if (senate[i] === 'R') {
            radiant.push(i)
        }else {
            dire.push(i)
        }
    }
    while(radiant.length !== 0 && dire.length !== 0) {
        let r = radiant.shift()
        let d = dire.shift()
        if (r < d) {
            radiant.push(r + len)
        }else {
            dire.push(d + len)
        }
    }
    return radiant.length === 0 ? 'Dire' : 'Radiant'
}

export default predictPartyVictory