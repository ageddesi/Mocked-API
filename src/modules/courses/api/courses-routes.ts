import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomCourses from '../utils/getRandomCourses';
import { getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/courses/{qty}":
     *   get:
     *     tags:
     *     - Courses
     *     summary: Obtain a list of all courses
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The quantity of courses you want
     *       type: string
     *       default: 1
     *       required: false
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockCourses'
     */
    app.get('/courses/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req, 1);
        const courses = getRandomCourses(qty);
        res.json(courses);
    });
};
