import findWords from './500.find-words'

describe('find words', () => {
    test('input ["Hello","Alaska","Dad","Peace"] return ["Alaska","Dad"]', () => {
        expect(findWords(["Hello", "Alaska", "Dad", "Peace"])).toEqual(["Alaska", "Dad"]);
    });
    test('input ["asdfEWd","Addxegs","nxiedS","ADAbd","asdf"] return ["asdf"]', () => {
        expect(findWords(["asdfEWd", "Addxegs", "nxiedS", "ADAbd", "asdf"])).toEqual(["asdf"]);
    })
})