import isLongPressedName from './925.is-long-pressed-name'

describe('is long pressed name', () => {
    test('input "alex","aaleex" return true', () => {
        expect(isLongPressedName("alex", "aaleex")).toBeTruthy();
    });
    test('input "saeed","ssaaedd" return false', () => {
        expect(isLongPressedName("saeed", "ssaaedd")).toBeFalsy();
    });
    test('input "leelee","lleeelee" return true', () => {
        expect(isLongPressedName("leelee", "lleeelee")).toBeTruthy();
    });
    test('input "laiden","laiden" return true', () => {
        expect(isLongPressedName("laiden", "laiden")).toBeTruthy();
    });
})