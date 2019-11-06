import findOcurrences from './1078.find-ocurrences'

describe('find ocurrences', () => {
    test('input "alice is a good girl she is a good student","a", "good" return ["girl","student"]', () => {
        expect(findOcurrences("alice is a good girl she is a good student", "a", "good")).toEqual(["girl", "student"]);
    });
    test('input "we will we will rock you","we","will" return ["we","rock"]', () => {
        expect(findOcurrences("we will we will rock you", "we", "will")).toEqual(["we", "rock"]);
    });
})