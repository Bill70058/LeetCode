import isValid from './20.is-valid'

describe('is valid', () => {
    test('input "()" return true', () => {
        expect(isValid("()")).toBeTruthy();
    });
    test('input "(){}[]" return true', () => {
        expect(isValid("(){}[]")).toBeTruthy();
    });
    test('input "({)}" return false', () => {
        expect(isValid("({)}")).toBeFalsy();
    })
})