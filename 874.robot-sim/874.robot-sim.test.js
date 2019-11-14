import robotSim from './874.robot-sim'

describe('robot sim ', () => {
    test('input [4,-1,3],[] return 25', () => {
        expect(robotSim([4, -1, 3],[])).toEqual(25);
    });
    test('input [4,-1,4,-2,4],[[2,4]] return 65', () => {
        expect(robotSim([4, -1, 4, -2, 4],[[2,4]])).toEqual(65);
    });
})