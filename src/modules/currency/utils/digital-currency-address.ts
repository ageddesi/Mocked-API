import { faker } from '@faker-js/faker';
import DigitalCoin from '../models/digital-coin.types';

const digitalCurrencyAddress = (qty: number, coinName: DigitalCoin): string[] => {
    const addresses = [];

    for (let index = 0; index < qty; index++) {
        switch (coinName) {
            case DigitalCoin.Bitcoin:
                addresses.push(faker.finance.bitcoinAddress());
                break;
            case DigitalCoin.Ethereum:
                addresses.push(faker.finance.ethereumAddress());
                break;
            case DigitalCoin.Litecoin:
                addresses.push(faker.finance.litecoinAddress());
                break;
        }
    }

    return addresses;
};

export default digitalCurrencyAddress;
