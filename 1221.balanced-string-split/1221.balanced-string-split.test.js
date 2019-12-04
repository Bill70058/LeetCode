import balancedStringSplit from './1221.balanced-string-split'

describe('balanced string split', () => {
    test('input "RLRRLLRLRL" return 4', () => {
        expect(balancedStringSplit("RLRRLLRLRL")).toEqual(4);
    });
    test('input "RLLLLRRRLR" return 3', () => {
        expect(balancedStringSplit("RLLLLRRRLR")).toEqual(3);
    });
    test('input "LLLLRRRR" return 1', () => {
        expect(balancedStringSplit("LLLLRRRR")).toEqual(1);
    });
})