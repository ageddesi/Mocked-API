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
     *
     * definitions:
     *   MockFoodNutrition:
     *     type: array
     *     items:
     *       type: object
     *       properties:
     *         food:
     *           type: string
     *           example: 'Abiyuch'
     *         category:
     *           type: string
     *           example: 'fruits'
     *         servings:
     *           type: string
     *           example: '69.0 kCal'
     *         calories:
     *           type: string
     *           example: '100 g'
     *         saturatedFat:
     *           type: string
     *           example: '0.068 g'
     *         transFat:
     *           type: string
     *           example: '10 mg'
     *         cholesterol:
     *           type: string
     *           example: '0.0 mg'
     *         sodium:
     *           type: string
     *           example: '20.0 mg'
     *         carbohydrate:
     *           type: string
     *           example: '17.6 g'
     *         sugars:
     *           type: string
     *           example: '4.5 g'
     *         fibre:
     *           type: string
     *           example: '0.3 g'
     *         protein:
     *           type: string
     *           example: '0.4 g'
     */
    app.get('/food/nutrition/:foodGroup?/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const foodGroup = getFoodGroup(req);
        const food = getRandomFoods(FoodEnum[foodGroup as keyof FoodEnum], qty);
        res.json(food);
    });
};
