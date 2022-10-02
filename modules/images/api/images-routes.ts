import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getImageDataFromRequest } from '../../../utils/route-utils';
import ImageEnum from '../consts/ImageEnum';
import getImageUrls from '../utils/getImageUrls';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/images/abstract/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of abstract image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/abstract/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Abstract, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/animals/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of animal image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/animals/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Animals, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/avatar/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of avatar image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/avatar/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Avatar, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/business/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of business image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/business/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Business, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/cats/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of cat image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/cats/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Cats, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/city/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of city image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/city/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.City, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/fashion/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of fashion image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/fashion/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Fashion, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/food/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of food image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/food/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Food, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/nature/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of nature image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/nature/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Nature, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/nightlife/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of nightlife image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/nightlife/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Nightlife, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/people/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of people image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/people/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.People, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/sports/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of sport image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/sports/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Sports, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/technics/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of technics image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/technics/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Technics, imageData);
        res.json(imageUrls);
    });

    /**
     * @openapi
     * '/images/transport/{width}/{height}/{qty}':
     *   get:
     *     tags:
     *     - Images
     *     summary: Obtain a list of transport image urls
     *     parameters:
     *     - in: path
     *       name: width
     *       description: Width in pixels that your image needs to be
     *       type: number
     *       default: 640
     *     - in: path
     *       name: height
     *       description: Height in pixels that your image needs to be
     *       type: number
     *       default: 480
     *     - in: path
     *       name: qty
     *       description: The amount of image urls you require
     *       type: string
     *       default: 10
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             type: string
     *             example: https://loremflickr.com/1024/201/cats?49645
     */
    app.get('/images/transport/:width?/:height?/:qty?', (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Transport, imageData);
        res.json(imageUrls);
    });
};
