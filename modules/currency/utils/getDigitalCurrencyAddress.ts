import { faker } from '@faker-js/faker';
import DigitalCoinEnum from '../consts/DigitalCoinEnum';

const getDigitalCurrencyAddress = (qty: number, coinName: DigitalCoinEnum): string[] => {
    const addresses = [];

    for (let index = 0; index < qty; index++) {
        switch (coinName) {
            case DigitalCoinEnum.Bitcoin:
                addresses.push(faker.finance.bitcoinAddress());
                break;
            case DigitalCoinEnum.Ethereum:
                addresses.push(faker.finance.ethereumAddress());
                break;
            case DigitalCoinEnum.Litecoin:
                addresses.push(faker.finance.litecoinAddress());
                break;
        }
    }

    return addresses;
};

export default getDigitalCurrencyAddress;
