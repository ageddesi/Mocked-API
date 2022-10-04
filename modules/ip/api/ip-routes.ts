import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }
    return macAddress;
}

    app.get("/ip/", (req: Request, res: Response) => {
		const ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
        res.json({ip})
    })
		
    app.get("/mac/", (req: Request, res: Response) => {
		const mac = genMAC();
        res.json({mac})
    })
