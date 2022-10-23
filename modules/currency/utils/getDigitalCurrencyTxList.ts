import { faker } from '@faker-js/faker';
import transactionInfo from '../consts/TransactionInfo';

const getDigitalCurrencyTxList = (address: string, amount: number): transactionInfo[] => {
    const ETH_TX_LIST = [];

    for (let i = 0; i < amount; i++) {
        let transaction: transactionInfo = {
            blockNumber: (Math.floor(Math.random() * 99999999) + 10000000).toString(),
            timeStamp: (Math.floor(Math.random() * 9999999999) + 1000000000).toString(),
            hash: ('0x' + makeid(64)).toString(),
            nonce: (Math.floor(Math.random() * 30) + 1).toString(),
            blockHash: '0x' + makeid(64),
            transactionIndex: (Math.floor(Math.random() * 30) + 1).toString(),
            from: address,
            to: faker.finance.ethereumAddress(),
            value: Math.random().toString(),
            gas: (Math.floor(Math.random() * 9999) + 1000).toString(),
            gasPrice: (Math.floor(Math.random() * 999999999999) + 100000000000).toString(),
            isError: '0',
            txreceipt_status: '1',
            input: '0x' + makeid(136),
            confirmations: (Math.floor(Math.random() * 99999) + 100).toString(),
        };

        ETH_TX_LIST.push(transaction);
    }

    return ETH_TX_LIST;
};

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default getDigitalCurrencyTxList;
