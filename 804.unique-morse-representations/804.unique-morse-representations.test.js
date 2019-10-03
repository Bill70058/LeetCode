import uniqueMorseRepresentations from './804.unique-morse-representations'

describe('unique morse representatioins',()=>{
    test('input ["gin", "zen", "gig", "msg"] return 2',()=>{
        expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toEqual(2);
    });
    test('input ["rwjje","aittjje","auyyn","lqtktn","lmjwn"] return 1',()=>{
        expect(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"])).toEqual(1);
    })
})