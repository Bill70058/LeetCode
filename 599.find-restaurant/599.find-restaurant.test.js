import findRestaurant from './599.find-restaurant';

describe('find restaurant',()=>{
    test('input ["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"] return ["Shogun"]', ()=>{
        expect(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])).toEqual(["Shogun"])
    })
})