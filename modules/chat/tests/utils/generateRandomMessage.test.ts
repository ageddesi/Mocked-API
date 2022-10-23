import { generateRandomMessage } from '../../utils/generateRandomMessage';

describe('generate random message', () => {
    it('should return a random string', () => {
        const res = generateRandomMessage();

        expect(typeof res).toBe('string');
    });
});
