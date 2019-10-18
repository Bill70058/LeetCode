import lengthOfLastWord from './58.length-of-last-word'


describe('length of last word ',()=>{
    test('input "hello world" return 5',()=>{
        expect(lengthOfLastWord('hello world')).toEqual(5);
    });
    test('input "a" return 1',()=>{
        expect(lengthOfLastWord('a')).toEqual(1);
    });
    test('input " " return 0',()=>{
        expect(lengthOfLastWord(" ")).toEqual(0);
    })
})