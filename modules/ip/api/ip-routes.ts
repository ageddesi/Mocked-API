import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { genMAC } from "../utils/getmac.ts";

let maco = new macgen();



app.get("/ip/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);

        try {
            const ip = []

            for (let i = 0; i < qty; i++) {
		    const random_ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
                ip.push(random_ip);
            }

            res.json(ip);
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    })


app.get("/mac/:qty?", (req: Request, res: Response) => {
        const qty = getQtyFromRequest(req);

        try {
            const mac = []

            for (let i = 0; i < qty; i++) {
		    mac.push(maco.genMAC());
            }

            res.json(ip);
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    })
