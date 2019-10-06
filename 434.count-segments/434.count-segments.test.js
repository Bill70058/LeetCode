import countSegments from './434.count-segments'

describe('count segments',()=>{
    test('input "Hello, my name is John" return 5',()=>{
        expect(countSegments("Hello, my name is John")).toEqual(5);
    });
    test('input "            " return 0',()=>{
        expect(countSegments("          ")).toEqual(0);
    });
    test('input "   foo   bar" return 2',()=>{
        expect(countSegments("    foo    bar  ")).toEqual(2);
    })
})