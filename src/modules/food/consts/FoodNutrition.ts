/**
 * @openapi
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

type FoodNutrition = {
    food: string;
    category: string;
    servings: string;
    calories: string;
    fat: string;
    saturatedFat: string;
    transFat: string;
    cholesterol: string;
    sodium: string;
    carbohydrate: string;
    sugars: string;
    fibre: string;
    protein: string;
};

export type { FoodNutrition };
