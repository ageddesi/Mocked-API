/**
 * * @openapi
 * definitions:
 *   MockAddress:
 *     type: objcts
 *     properties:
 *        houseNumber:
 *          type: string
 *          example: 10
 *        addressLine1:
 *          type: string
 *          example: Flat 22b
 *        addressLine2:
 *          type: string
 *          example: Gladstone Road
 *        city:
 *          type: string
 *          example: London
 *        postcode:
 *          type: string
 *          example: TN22 7HL
 *        zipcode:
 *          type: string
 *          example: 10234
 *        country:
 *          type: string
 *          example: uk
 */
type Address = {
    houseNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    zipcode: string;
    country: string;
};

export default Address;
