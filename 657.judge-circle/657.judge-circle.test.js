import judgeCircle from './657.judge-circle'

describe('judge circle',()=>{
    test('input UD return true',()=>{
        expect(judgeCircle('UD')).toBeTruthy();
    });
    test('input LL return false',()=>{
        expect(judgeCircle('LL')).toBeFalsy();
    });
    test('input LLUURRDUDUDD return true',()=>{
        expect(judgeCircle('LLUURRDUDUDD')).toBeTruthy();
    })
})