import canConstruct from './383.can-construct'

describe('can construct', () => {
    test('input aa,ab return false', () => {
        expect(canConstruct('aa', 'ab')).toBeFalsy();
    });
    test('input aa,aab return true', () => {
        expect(canConstruct('aa', 'aab')).toBeTruthy();
    });
})