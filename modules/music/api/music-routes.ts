import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from "@faker-js/faker";

interface Music {
    id: string
    genre: string
    song: string
}

interface Album {
    id: string
    name: string
    releasedate: string
    price: string
    publisher: string
    songs: number
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

    app.get("/album/", (req: Request, res: Response) => {
        let data: Album[] = []

            data.push({
                id: faker.datatype.uuid(),
                name: faker.music.songName(),
                releasedate: faker.date.past(80).toString().split(' ')[3],
                price: "$" + Math.floor(Math.random() * (20 - 10 + 1) + 10),
                publisher: faker.company.name(),
                songs: Math.floor(Math.random() * (20 - 6 + 1) + 6)
            }) 
   
        res.json({
           data
        })
    })

}