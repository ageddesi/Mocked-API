import { getRandomDate } from '../dates';

describe('date utils', () => {
  describe('get random date', () => {
    it('should return a date within the bounds I give it', () => {
      const arr = ['this', 'is', 'a', 'test'];

      const from = new Date();
      from.setMonth(0, 1);

      const too = new Date();
      too.setMonth(1, 10);

      const res = getRandomDate(from, too);

      const day = res.getDay();

      expect(res.getMonth()).toBe(0);
      expect(day).toBeGreaterThanOrEqual(1);
      expect(day).toBeLessThanOrEqual(10);
    });
  });
});
