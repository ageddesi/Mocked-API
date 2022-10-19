interface ledgerInfo {
    ledger_index: string;
    ledger_hash: string;
    close_flags: string;
    close_time: string;
    close_time_human: string;
    parent_hash: string;
    transaction_hash: string;
    tx_count: string;
    total_coins: string;
    destroyed_coins: string;
}

export default ledgerInfo;