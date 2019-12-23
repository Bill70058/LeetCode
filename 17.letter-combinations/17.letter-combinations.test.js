import letterCombinations from './17.letter-combinations'

describe('letter combinations', () => {
    test('input 23 return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
        expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    })
})