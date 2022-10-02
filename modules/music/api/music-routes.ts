import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { faker } from "@faker-js/faker";
import { Music } from '../consts/Music'
import { Album } from '../consts/Album'


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

    app.get("/album/:qty", (req: Request, res: Response) => {
        const {params} = req
        let data: Album[] = []

            data.push({
                id: faker.datatype.uuid(),
                name: faker.music.songName(),
                releasedate: faker.date.past(80).toString().split(' ')[3],
                price: "$" + Math.floor(Math.random() * (20 - 10 + 1) + 10),
                publisher: faker.company.name(),
                songs: Number(params.qty)
            }) 
   
        res.json({
           data
        })
    })

}