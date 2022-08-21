import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getFirstNames from '../utils/getFirstNames';
import getFullNames from '../utils/getFullNames';
import getLastNames from '../utils/getLastNames';
import getMiddleNames from '../utils/getMiddleNames';

const defaultQty = 10;
const defaultErrorMessage = "Unable to provide a random list of names at this time. Unknown Error Occured";

const getQtyFromRequest = (request : Request | null) : number => {
    return request.params.qty ? parseInt(request.params.qty) : defaultQty;
}

module.exports = function(app : core.Express){

    // Get a list of random full names
    app.get("/names/fullnames/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFullNames = getFullNames(qty);
        if(randomFullNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            fullNamesList: randomFullNames
        })
    })

    // Get a list of random male full names
    app.get("/names/fullnames/male/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFullNames = getFullNames(qty, "male");
        if(randomFullNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            fullNamesList: randomFullNames
        })
    })

    // Get a list of random female full names
    app.get("/names/fullnames/female/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFullNames = getFullNames(qty, "female");
        if(randomFullNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            fullNamesList: randomFullNames
        })
    })

    // Get a list of random first names
    app.get("/names/firstnames/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFirstNames = getFirstNames(qty);
        if(randomFirstNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            firstNamesList: randomFirstNames
        })
    })

    // Get a list of random male first names
    app.get("/names/firstnames/male/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFirstNames = getFirstNames(qty, "male");
        if(randomFirstNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            firstNamesList: randomFirstNames
        })
    })

    // Get a list of random female first names
    app.get("/names/firstnames/female/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomFirstNames = getFirstNames(qty, "female");
        if(randomFirstNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            firstNamesList: randomFirstNames
        })
    })

    // Get a list of random last names
    app.get("/names/surnames/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getLastNames(qty);
        if(randomLastNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            lastNamesList: randomLastNames
        })
    })

    // Get a list of random male last names
    app.get("/names/surnames/male/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getLastNames(qty, "male");
        if(randomLastNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            lastNamesList: randomLastNames
        })
    })

     // Get a list of random female last names
     app.get("/names/surnames/female/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getLastNames(qty, "female");
        if(randomLastNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            lastNamesList: randomLastNames
        })
    })

    // Get a list of random middlenames
    app.get("/names/middlenames/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getMiddleNames(qty);
        if(randomLastNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            lastNamesList: randomLastNames
        })
    })

    // Get a list of random male middlenames
    app.get("/names/middlenames/male/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getMiddleNames(qty, "male");
        if(randomLastNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            lastNamesList: randomLastNames
        })
    })

    // Get a list of random female middlenames
    app.get("/names/middlenames/female/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);
        const randomLastNames = getMiddleNames(qty, "female");
        if(randomLastNames.length === 0){
            return res.status(400).json(defaultErrorMessage)
        }
        res.json({
            lastNamesList: randomLastNames
        })
    })
}