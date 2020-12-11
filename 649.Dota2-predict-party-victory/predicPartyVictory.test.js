import predictPartyVictory from './predictPartyVictory'

describe('predict partyVictory',()=>{
    test('input [R,D] return R',()=>{
        expect(predictPartyVictory(['R','D'])).toEqual('Radiant')
    })
    test('input [R,D,D] return D',()=>{
        expect(predictPartyVictory(['R','D','D'])).toEqual('Dire')
    })
})