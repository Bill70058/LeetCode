import fizzBuzz from './412.fizz-buzz'

describe('fizz buzz',()=>{
    test('input 1 return ["1"]',()=>{
        expect(fizzBuzz(1)).toEqual(['1']);
    });
    test('input 3 return ["1","2","Fizz"]',()=>{
        expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
    });
    test('input 5 return ["1","2","Fizz","4","Buzz"]',()=>{
        expect(fizzBuzz(5)).toEqual(["1","2","Fizz","4","Buzz"])
    });
    test('input 15 return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',()=>{
        expect(fizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])
    });
})