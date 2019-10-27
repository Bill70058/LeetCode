import compress from './443.compress'

describe('compress', () => {
    test('input ["a","a","b","b","c","c","c"] return ["a","2","b","2","c","3"]', () => {
        expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toEqual(['a', '2', 'b', '2', 'c', '3'])
    });
    test('input ["a","b","b","b","b","b","b","b","b","b","b","b","b"] return ["a","b","1","2"]', () => {
        expect(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])).toEqual(["a", "b", "1", "2"])
    });
    test('input ["a"] return ["a"]', () => {
        expect(compress(['a'])).toEqual(['a'])
    })
})