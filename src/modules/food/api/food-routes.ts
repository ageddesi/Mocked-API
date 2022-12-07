import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomFoods from '../utils/getRandomFoods';
import FoodEnum from '../consts/FoodEnum';
import { getFoodGroup, getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/food/nutrition/{foodGroup}/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of foods by category with their nutrients
     *     parameters:
     *     - in: path
     *       name: foodGroup
     *       description: The category of food you require
     *       type: string
     *       enum: [all, beverages, dairy, fruits, grains, proteins, vegetables]
     *       default: All
     *     - in: path
     *       name: qty
     *       description: The total number of dairy with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/:foodGroup?/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const foodGroup = getFoodGroup(req);
        const food = getRandomFoods(FoodEnum[foodGroup as keyof FoodEnum], qty);
        res.json(food);
    });
};
