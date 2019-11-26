import removeDuplicates from './1047.remove-duplicates'

describe('remove duplicates', () => {
    test('input "abbaca" return "ca"', () => {
        expect(removeDuplicates("abbaca")).toEqual("ca");
    });
    test('input "leelcode" return "code"', () => {
        expect(removeDuplicates("leelcode")).toEqual("code");
    });
})