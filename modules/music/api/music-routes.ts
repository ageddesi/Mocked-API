import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from "@faker-js/faker";

interface Music {
    id: string
    genre: string
    song: string
}

module.exports = function(app : core.Express){

    app.get("/music/:qty", (req: Request, res: Response) => {
        const {params} = req
        let data: Music[] = []
        for(let i = 0; i <= Number(params.qty); i++) {
            data.push({
                id: faker.datatype.uuid(),
                genre: faker.music.genre(),
                song: faker.music.songName()
            })
        }
        res.json({
           data,
           total: data.length
        })
    })
}