/**
 * @openapi
 * definitions:
 *   MockedRippleLedger:
 *     type: object
 *     properties:
 *       ledger_index:
 *         type: string
 *         example: '102356562'
 *       ledger_hash:
 *         type: string
 *         example: 'E9BE2BF76B567E19FE8EA07E44AD84657287248E66221177F529575FC9DE1006'
 *       close_flags:
 *         type: string
 *         example: '0'
 *       close_time:
 *         type: string
 *         example: '1666137175651'
 *       close_time_human:
 *         type: string
 *         example: '2022-10-18T23:52:55.651Z'
 *       parent_hash:
 *         type: string
 *         example: '6977BD8B25BAB7FEBB965CC0E57783773723E096207CA716220D36A5381EA6BD'
 *       transaction_hash:
 *         type: string
 *         example: '4402A59390C12C4EA5841DA69A4B6BCB77C9B5C3BE5C770FAA731FCE090139F4'
 *       tx_count:
 *         type: string
 *         example: '85'
 *       total_coins:
 *         type: string
 *         example: '99924240361351122'
 *       destroyed_coins:
 *         type: string
 *         example: '-70612'
 */

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
