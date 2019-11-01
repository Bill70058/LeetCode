import longestWord from './720.longest-word'

describe('longest word', () => {
    test('input ["w","wo","wor","worl", "world"] return world', () => {
        expect(longestWord(["w", "wo", "wor", "worl", "world"])).toEqual('world');
    });
    test('input ["a", "banana", "app", "appl", "ap", "apply", "apple"] return apple', () => {
        expect(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])).toEqual('apple');
    });
})