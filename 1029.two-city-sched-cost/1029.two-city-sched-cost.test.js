import twoCitySchedCost from './1029.two-city-sched-cost'

describe('two city sched cost', () => {
    test('input [10,20],[30,200],[400,50],[30,20]] return 110', () => {
        expect(twoCitySchedCost([
            [10, 20],
            [30, 200],
            [400, 50],
            [30, 20]
        ])).toEqual(110);
    });
    test('input [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]] return 1859', () => {
        expect(twoCitySchedCost([
            [259, 770],
            [448, 54],
            [926, 667],
            [184, 139],
            [840, 118],
            [577, 469]
        ])).toEqual(1859);
    });
})