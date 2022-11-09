import getRandomCourses from '../../utils/getRandomCourses';

describe('get random courses', () => {
    it('should return a list of random courses', () => {
        const amount = 4;
        const res = getRandomCourses(4);
        expect(res.length).toBe(amount);
    });
});
