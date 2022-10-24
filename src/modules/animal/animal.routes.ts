import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../utils/route-utils';
import Animal from './models/animal.types';
import animalSpecies from './utils/animal-species';


module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/animals/bear/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of bear species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/bear/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomBears = animalSpecies(Animal.Bear, qty);
        res.json(randomBears);
    });

    /**
     * @openapi
     * "/animals/bird/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of bird species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/bird/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomBirds = animalSpecies(Animal.Bird, qty);
        res.json(randomBirds);
    });

    /**
     * @openapi
     * "/animals/cat/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of cat species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/cat/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCats = animalSpecies(Animal.Cat, qty);
        res.json(randomCats);
    });

    /**
     * @openapi
     * "/animals/cetecean/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of cetecean species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/cetecean/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCetecean = animalSpecies(Animal.Cetecean, qty);
        res.json(randomCetecean);
    });

    /**
     * @openapi
     * "/animals/cow/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of cow species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/cow/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCow = animalSpecies(Animal.Cow, qty);
        res.json(randomCow);
    });

    /**
     * @openapi
     * "/animals/crocodile/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of crocodile species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/crocodile/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCrocodile = animalSpecies(Animal.Crocodile, qty);
        res.json(randomCrocodile);
    });

    /**
     * @openapi
     * "/animals/dog/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of dog species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/dog/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomDog = animalSpecies(Animal.Dog, qty);
        res.json(randomDog);
    });

    /**
     * @openapi
     * "/animals/fish/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of fish species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/fish/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFish = animalSpecies(Animal.Fish, qty);
        res.json(randomFish);
    });

    /**
     * @openapi
     * "/animals/horse/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of horse species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/horse/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomHorse = animalSpecies(Animal.Horse, qty);
        res.json(randomHorse);
    });

    /**
     * @openapi
     * "/animals/insect/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of insect species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/insect/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomInsect = animalSpecies(Animal.Insect, qty);
        res.json(randomInsect);
    });

    /**
     * @openapi
     * "/animals/lion/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of lion species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/lion/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLion = animalSpecies(Animal.Lion, qty);
        res.json(randomLion);
    });

    /**
     * @openapi
     * "/animals/rabbit/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of rabbit species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/rabbit/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomRabbit = animalSpecies(Animal.Rabbit, qty);
        res.json(randomRabbit);
    });

    /**
     * @openapi
     * "/animals/rodent/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of rodent species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/rodent/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomRodent = animalSpecies(Animal.Rodent, qty);
        res.json(randomRodent);
    });

    /**
     * @openapi
     * "/animals/snake/species/{qty}":
     *   get:
     *     tags:
     *     - Animals
     *     summary: Obtain a random list of snake species with no duplications
     *     parameters:
     *     - in: path
     *       name: qty
     *       description: The amount of species you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: Sun bear
     */
    app.get('/animals/snake/species/:qty?', (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomSnake = animalSpecies(Animal.Snake, qty);
        res.json(randomSnake);
    });
};
