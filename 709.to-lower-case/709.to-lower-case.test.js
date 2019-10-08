import toLowerCase from './709.to-lower-case'

describe('to lower case',()=>{
    test('input Hello return hello',()=>{
        expect(toLowerCase('Hello')).toEqual('hello');
    });
    test('input "al&phaBET" return "al&phabet"',()=>{
        expect(toLowerCase('al&phaBET')).toEqual("al&phabet");
    });
    test('input "Hello World" return "hello world"',()=>{
        expect(toLowerCase("Hello World")).toEqual("hello world");
    })
})