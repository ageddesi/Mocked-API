/**
 * @openapi
 * definitions:
 *  MockTimeZoneResponse:
 *    type: object
 *    properties:
 *      value:
 *        type: string
 *        example: America/New_York
 *      abbr:
 *        type: string
 *        example: EST
 *      offset:
 *        type: number
 *        example: -5
 *      isdst:
 *        type: boolean
 *        example: true
 *      text:
 *        type: string
 *        example: '(GMT-05:00) Eastern Time (US & Canada)'
 *      utc:
 *        type: array
 *        items:
 *          type: string
 *          example: 'America/New_York'
 */
type TimeZone = {
    value: string;
    abbr: string;
    offset: number;
    isdst: boolean;
    text: string;
    utc: string[];
};
