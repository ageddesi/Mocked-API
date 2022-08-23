import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getImageDataFromRequest } from '../../../utils/route-utils';
import ImageEnum from '../consts/ImageEnum';
import getImageUrls from '../utils/getImageUrls';

module.exports = function(app: core.Express){

    // Get a random list of abstract image urls
    app.get("/images/abstract/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Abstract, imageData);
        res.json(imageUrls);
    })

    // Get a random list of animal image urls
    app.get("/images/animals/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Animals, imageData);
        res.json(imageUrls);
    })

    // Get a random list of avatar image urls
    app.get("/images/avatar/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Avatar, imageData);
        res.json(imageUrls);
    })

    // Get a random list of business image urls
    app.get("/images/business/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Business, imageData);
        res.json(imageUrls);
    })

    // Get a random list of cat image urls
    app.get("/images/cats/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Cats, imageData);
        res.json(imageUrls);
    })

    // Get a random list of city image urls
    app.get("/images/city/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.City, imageData);
        res.json(imageUrls);
    })

    // Get a random list of fashion image urls
    app.get("/images/fashion/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Fashion, imageData);
        res.json(imageUrls);
    })

    // Get a random list of food image urls
    app.get("/images/food/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Food, imageData);
        res.json(imageUrls);
    })

    // Get a random list of nature image urls
    app.get("/images/nature/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Nature, imageData);
        res.json(imageUrls);
    })

    // Get a random list of nightlife image urls
    app.get("/images/nightlife/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Nightlife, imageData);
        res.json(imageUrls);
    })

    // Get a random list of people image urls
    app.get("/images/people/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.People, imageData);
        res.json(imageUrls);
    })

    // Get a random list of sports image urls
    app.get("/images/sports/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Sports, imageData);
        res.json(imageUrls);
    })

    // Get a random list of technics image urls
    app.get("/images/technics/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Technics, imageData);
        res.json(imageUrls);
    })

    // Get a random list of transport image urls
    app.get("/images/transport/:width?/:height?/:qty?", (req: Request, res: Response) => {
        const imageData = getImageDataFromRequest(req);
        const imageUrls = getImageUrls(ImageEnum.Transport, imageData);
        res.json(imageUrls);
    })

}