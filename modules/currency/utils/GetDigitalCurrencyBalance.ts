import addressBalance from '../consts/AddressBalance';
import digital_currency_units from '../data/digital-currency-units';

const getDigitalCurrencyBalance = (network: string, address: string) : addressBalance => {

    const unit = digital_currency_units[network];
    const amount: number = Number((Math.random() * (1000 - 0.001) + 0.001).toFixed(3));

    const addressBalance = {
        address: address,
        amount: amount,
        unit: unit,
    }

    return addressBalance
   
}

export default getDigitalCurrencyBalance;