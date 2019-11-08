import uncommonFromSentences from './884.uncommon-from-sentences'

describe('uncommon from sentences', () => {
    test('input "this apple is sweet","this apple is sour" return ["sweet","sour"]', () => {
        expect(uncommonFromSentences("this apple is sweet", "this apple is sour")).toEqual(["sweet", "sour"]);
    });
    test('input "apple apple","banana" return ["banana"]', () => {
        expect(uncommonFromSentences("apple apple", "banana")).toEqual(["banana"]);
    });
})