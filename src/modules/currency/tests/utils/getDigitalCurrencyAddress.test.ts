import getDigitalCurrencyAddress from '../../utils/getDigitalCurrencyAddress';
import DigitalCoinEnum from '../../consts/DigitalCoinEnum';
import { faker } from '@faker-js/faker';

jest.mock('@faker-js/faker', () => ({
    faker: {
        finance: {
            bitcoinAddress: jest.fn().mockReturnValue('bitcoin address'),
            ethereumAddress: jest.fn().mockReturnValue('eth address'),
            litecoinAddress: jest.fn().mockReturnValue('lite address'),
        },
    },
}));

describe('get random users', () => {
    it('should return me a bitcoin address if I pass in bitcoin as the coin name', () => {
        const res = getDigitalCurrencyAddress(1, DigitalCoinEnum.Bitcoin);

        expect(faker.finance!.bitcoinAddress).toHaveBeenCalled();
        expect(res).toStrictEqual(['bitcoin address']);
    });

    it('should return me a Ethereum address if I pass in bitcoin as the coin name', () => {
        const res = getDigitalCurrencyAddress(1, DigitalCoinEnum.Ethereum);

        expect(faker.finance!.ethereumAddress).toHaveBeenCalled();
        expect(res).toStrictEqual(['eth address']);
    });

    it('should return me a bitcoin address if I pass in bitcoin as the coin name', () => {
        const res = getDigitalCurrencyAddress(1, DigitalCoinEnum.Litecoin);

        expect(faker.finance!.litecoinAddress).toHaveBeenCalled();
        expect(res).toStrictEqual(['lite address']);
    });

    it('should return me the correct amount of addresses I requested', () => {
        const res = getDigitalCurrencyAddress(5, DigitalCoinEnum.Bitcoin);
        expect(res.length).toBe(5);
    });
});
