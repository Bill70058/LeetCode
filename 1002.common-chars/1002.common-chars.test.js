import commonChars from './1002.common-chars'


describe('common chars', () => {
    test('input ["bella","label","roller"] return ["e","l","l"]', () => {
        expect(commonChars(["bella", "label", "roller"])).toEqual(["e", "l", "l"]);
    });
    test('input ["cool","lock","cook"] return ["c","o"]', () => {
        expect(commonChars(["cool", "lock", "cook"])).toEqual(["c", "o"]);
    });
})