import ledgerInfo from '../consts/LedgerInfo';

const getDigitalCurrencyLedger = (amount: number): ledgerInfo[] => {
    const XPR_TRANS_LIST = [];
    const getDate = new Date();

    for (let i = 0; i < amount; i++) {
        let transaction: ledgerInfo = {
            ledger_index: (Math.floor(Math.random() * 99999999) + 10000000).toString(),
            ledger_hash: generateSHA512HalfHash(64).toString(),
            close_flags: '0',
            close_time: getDate.getTime().toString(),
            close_time_human: getDate.toISOString(),
            parent_hash: generateSHA512HalfHash(64).toString(),
            transaction_hash: generateSHA512HalfHash(64).toString(),
            tx_count: Math.floor(Math.random() * 100).toString(),
            total_coins: `999${generateCoins(14)}`,
            destroyed_coins: `-${randomIntegerFromRange(1000, 100000).toString()}`,
        };

        XPR_TRANS_LIST.push(transaction);
    }

    return XPR_TRANS_LIST;
};

// https://xrpl.org/basic-data-types.html#hashes
function generateSHA512HalfHash(length: number) {
    let result = '';
    const characters = 'ABCDEF0123456789';
    const charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generateCoins(length: number) {
    let coins = '';

    for (let i = 0; i < length; i++) {
        coins += Math.floor(Math.random() * (length / 2));
    }

    return coins;
}

function randomIntegerFromRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default getDigitalCurrencyLedger;
