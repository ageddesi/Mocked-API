import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomFoods from '../utils/getRandomFoods';
import FoodEnum from '../consts/FoodEnum';
import { getQtyFromRequest } from '../../../utils/route-utils';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/food/nutrition/dairy/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of dairy with their nutrients
     *     parameters:
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
    app.get('/food/nutrition/dairy/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.Dairy, qty);
        res.json(food);
    });

    /**
     * @openapi
     * "/food/nutrition/vegetables/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of vegetables with their nutrients
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The total number of vegetables with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/vegetables/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.Vegetables, qty);
        res.json(food);
    });

    /**
     * @openapi
     * "/food/nutrition/fruits/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of fruits with their nutrients
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The total number of fruits with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/fruits/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.Fruits, qty);
        res.json(food);
    });

    /**
     * @openapi
     * "/food/nutrition/grains/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of food with their nutrients
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The total number of food with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/grains/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.Grains, qty);
        res.json(food);
    });

    /**
     * @openapi
     * "/food/nutrition/protein/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of protein with their nutrients
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The total number of protein with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/protein/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.Protein, qty);
        res.json(food);
    });

    /**
     * @openapi
     * "/food/nutrition/beverages/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of beverages with their nutrients
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The total number of beverages with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/beverages/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.Beverages, qty);
        res.json(food);
    });

    /**
     * @openapi
     * "/food/nutrition/{qty}":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of food with their nutrients
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The total number of food with their nutrients you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const food = getRandomFoods(FoodEnum.All, qty);
        res.json(food);
    });
};
