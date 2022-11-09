import { getRandomArrayItem, getRandomSubArray } from '../arrays';

describe('array utils', () => {
    describe('get random Array Item', () => {
        it('should return an item from the array I pass in', () => {
            const arr = ['this', 'is', 'a', 'test'];
            const res = getRandomArrayItem(arr);

            expect(arr.includes(res)).toBe(true);
        });
    });

    describe('get random subarray', () => {
        it('should return an random subarray from original array', () => {
            const arr = ['this', 'is', 'a', 'test'];
            const res = getRandomSubArray(arr, 2);

            expect(
                arr.filter((originalArrElement) =>
                    res.find((responseArrElement) => originalArrElement === responseArrElement)
                ).length
            ).toBe(2);
        });
    });
});
