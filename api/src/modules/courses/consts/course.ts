/**
 * @openapi
 * definitions:
 *   MockCourses:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Introduction to Mocked-API"
 *         description:
 *           type: string
 *           example: "Learn best practices on how to use Mocked-API"
 *         provider:
 *           type: string
 *           example: "Mocked-API Bootcamp"
 *         url:
 *           type: string
 *           example: "https://github.com/ageddesi/Mocked-API"
 *         type:
 *           type: string
 *           example: "physical"
 *         address:
 *           type: string
 *           example: 'Flat 22b, Gladstone Road'
 *         price:
 *           type: string
 *           example: $80.09
 */
type Course = {
    name: string;
    description: string;
    provider: string;
    url: string;
    type: string;
    address: string;
    price: string;
};

export default Course;
