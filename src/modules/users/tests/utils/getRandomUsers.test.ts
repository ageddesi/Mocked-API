import getRandomUsers from '../../utils/getRandomUsers';

describe('get random users', () => {
    it('should return a list of random users', () => {
        const amount = 4;
        const res = getRandomUsers(4);
        expect(res.length).toBe(amount);
    });
});
