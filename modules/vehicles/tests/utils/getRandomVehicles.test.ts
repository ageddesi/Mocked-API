import getRandomVehicles from '../../utils/getRandomVehicles';

describe('get random vehicles', () => {
    it('should return a list of random vehicles', () => {
        const amount = 4;
        const res = getRandomVehicles(4);
        expect(res.length).toBe(amount);
    });
});
