/**
 * @openapi
 * definitions:
 *   MockVehicles:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Jeep Model X
 *         type:
 *           type: string
 *           example: Minivan
 *         color:
 *           type: string
 *           example: tan
 *         fuel:
 *           type: string
 *           example: Hybrid
 *         manufacturer:
 *           type: string
 *           example: Jeep
 *         model:
 *           type: string
 *           example: A8
 *         vin:
 *           type: string
 *           example: NP1WJW8L8WWM52689
 *         vrm:
 *           type: string
 *           example: JX30UEU
 */

type Vehicle = {
    name: string;
    type: string;
    color: string;
    fuel: string;
    manufacturer: string;
    model: string;
    vin: string;
    vrm: string;
};

export default Vehicle;
