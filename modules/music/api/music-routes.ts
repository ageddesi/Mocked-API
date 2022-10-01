import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from "@faker-js/faker";

module.exports = function(app : core.Express){

    app.get("/music", (req: Request, res: Response) => {
        res.json({
            id: faker.datatype.uuid(),
            genre: faker.music.genre(),
            song: faker.music.songName()
        })
    })
}