import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { genMAC } from "../utils/getmac.ts";

let maco = new macgen();

    app.get("/ip/", (req: Request, res: Response) => {
		const ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
        res.json({ip})
    })
		
    app.get("/mac/", (req: Request, res: Response) => {
		const mac = maco.genMAC();
        res.json({mac})
    })
