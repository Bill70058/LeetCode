import getHint from './299.get-hint'

describe('get hint', () => {
    test('input 1807,7810 return 1A3B', () => {
        expect(getHint('1807', '7810')).toEqual('1A3B');
    });
    test('input 110,011 return 1A2B', () => {
        expect(getHint('110', '011')).toEqual('1A2B');
    });
    test('input 1123,0111 return 1A1B', () => {
        expect(getHint('1123', '0111')).toEqual('1A1B');
    })
})