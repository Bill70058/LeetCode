import generate from './118.generate'

describe('generate', () => {
    test('input 5 return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () => {
        expect(generate(5)).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ]);
    });
    test('input 6 return [ [ 1 ],[ 1, 1 ],[ 1, 2, 1 ],[ 1, 3, 3, 1 ],[ 1, 4, 6, 4, 1 ],[ 1, 5, 10, 10, 5, 1 ] ]', () => {
        expect(generate(6)).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1]
        ]);
    })
})