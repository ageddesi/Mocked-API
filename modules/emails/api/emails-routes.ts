import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getRandomEmails } from '../utils/getRandomEmails';

const defaultEmailCount = 10;

module.exports = function(app : core.Express){

    // Returns a set of Fake Emails
    app.get("/emails", (req: Request, res: Response) => {
        res.json(getRandomEmails(defaultEmailCount));
    })

}
