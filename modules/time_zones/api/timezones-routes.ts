import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import time_zones from '../data/time_zones';

module.exports = function(app : core.Express){

    // Get all time_zones
    app.get("/time_zones/", (req: Request, res: Response) => {
        res.json(time_zones)

    })

    // Get a random quote
    app.get("/time_zones/random", (req: Request, res: Response) => {
        const time_zone = time_zones[Math.floor(Math.random() * time_zones.length)];
        res.json(time_zone)
    })

}
