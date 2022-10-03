import { getRandomArrayItem } from '../arrays';

describe('array utils', () => {
  describe('get random Array Item', () => {
    it('should return an item from the array I pass in', () => {
      const arr = ['this', 'is', 'a', 'test'];
      const res = getRandomArrayItem(arr);

      expect(arr.includes(res)).toBe(true);
    });
  });
});
