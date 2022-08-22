import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import AnimalType from '../consts/AnimalEnum';
import getSpeciesOfAnimal from '../utils/getSpeciesOfAnimal';

module.exports = function(app: core.Express){

    // Get a random list of bear species with no duplications
    app.get("/animals/bear/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomBears = getSpeciesOfAnimal(AnimalType.Bear, qty);
        res.json(randomBears)
    })

    // Get a random list of bird species with no duplications
    app.get("/animals/bird/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomBirds = getSpeciesOfAnimal(AnimalType.Bird, qty);
        res.json(randomBirds)
    })

    // Get a random list of cat species with no duplications
    app.get("/animals/cat/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCats = getSpeciesOfAnimal(AnimalType.Cat, qty);
        res.json(randomCats)
    })

    // Get a random list of cetecean species with no duplications
    app.get("/animals/cetecean/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCetecean = getSpeciesOfAnimal(AnimalType.Cetecean, qty);
        res.json(randomCetecean)
    })

     // Get a random list of cow species with no duplications
     app.get("/animals/cow/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCow = getSpeciesOfAnimal(AnimalType.Cow, qty);
        res.json(randomCow)
    })

     // Get a random list of crocodile species with no duplications
     app.get("/animals/crocodile/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomCrocodile = getSpeciesOfAnimal(AnimalType.Crocodile, qty);
        res.json(randomCrocodile)
    })

     // Get a random list of dog species with no duplications
     app.get("/animals/dog/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomDog = getSpeciesOfAnimal(AnimalType.Dog, qty);
        res.json(randomDog)
    })

     // Get a random list of cetecean fish with no duplications
     app.get("/animals/fish/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFish = getSpeciesOfAnimal(AnimalType.Fish, qty);
        res.json(randomFish)
    })

     // Get a random list of horse species with no duplications
     app.get("/animals/horse/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomHorse = getSpeciesOfAnimal(AnimalType.Horse, qty);
        res.json(randomHorse)
    })

     // Get a random list of insect species with no duplications
     app.get("/animals/insect/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomInsect = getSpeciesOfAnimal(AnimalType.Insect, qty);
        res.json(randomInsect)
    })

     // Get a random list of lion species with no duplications
     app.get("/animals/lion/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLion = getSpeciesOfAnimal(AnimalType.Lion, qty);
        res.json(randomLion)
    })

     // Get a random list of rabbit species with no duplications
     app.get("/animals/rabbit/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomRabbit = getSpeciesOfAnimal(AnimalType.Rabbit, qty);
        res.json(randomRabbit)
    })

     // Get a random list of rodent species with no duplications
     app.get("/animals/rodent/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomRodent = getSpeciesOfAnimal(AnimalType.Rodent, qty);
        res.json(randomRodent)
    })

     // Get a random list of cetecean species with no duplications
     app.get("/animals/snake/species/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomSnake = getSpeciesOfAnimal(AnimalType.Snake, qty);
        res.json(randomSnake)
    })

}