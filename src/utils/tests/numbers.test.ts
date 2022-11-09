import { randomRating } from '../numbers';

describe('numbers utils', () => {
    describe('get random rating', () => {
        it('should return a rating between 1 and 5', () => {
            const res = randomRating();

            expect(res).toBeGreaterThanOrEqual(1);
            expect(res).toBeLessThanOrEqual(5);
        });
    });
});
