import reverse from './7.integer-inversion'

// describe：定义一组测试
describe("翻转整数", function() {
    // it: 定义一个测试用例
    test('123 应该翻转为 321',()=>{
        expect(reverse(123)).toEqual(321);
    });
    
    test('9147483647 应该返回 0',()=>{
        expect(reverse(9147483647)).toEqual(0);
    });

});
