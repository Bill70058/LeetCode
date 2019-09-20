import removeDuplicates from './26.removeDuplicates'

describe("return no duplicates array", function() {
    // it: 定义一个测试用例  
    test('input [1,1,2] return [1,2]',()=>{
        expect(removeDuplicates([1,1,2])).toEqual(2);
    });
    test('input [1,1,1] return [1]',()=>{
        expect(removeDuplicates([1,1,1])).toEqual(1);
    })

});