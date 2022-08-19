import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import countriesList from '../data/countries';

module.exports = function(app : core.Express){

    app.get("/countries/", (req: Request, res: Response) => {
        res.json({
            countries: countriesList
        })
    })

    app.get("/countries/:filterBy?", (req: Request, res: Response) => {
        if (req.params.filterBy) {
            const filteredList = countriesList.filter((source) => source.toLocaleLowerCase().includes(req.params.filterBy.toLocaleLowerCase()));
            return res.json({
                countries: filteredList
            })
        }
        res.json({
            countries: countriesList
        })
    })
    
}