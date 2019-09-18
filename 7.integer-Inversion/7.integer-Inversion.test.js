const reverse = require('./7.integerInversion.js');
const assert = require("assert");

// describe：定义一组测试
describe("翻转整数", function() {
    before(function() {
        // runs before all tests in this block
    });
    
    // it: 定义一个测试用例
    it("123 应该翻转为 321", function() {
        // assert: nodejs内置断言模块
        assert.equal(reverse(123),321);
    });
    it("9147483647 应该返回 0", function() {
        // assert: nodejs内置断言模块
        assert.equal(reverse(9147483647),0);
    });
    it('是否为真值',function(){
        assert.ok(true);
    });
    
    after(function() {
        // runs after all test in this block
    });
});
