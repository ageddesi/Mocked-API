import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomUsers from '../../users/utils/getRandomUsers';
import { getRandomChat } from '../utils/getRandomChat';

const defaultUserCount = 100;
const defaultMessageCount = 1000;

module.exports = function(app : core.Express){

    // Returns a random chat of 100 users and 1000 messages using randomly generated sentances
    app.get("/chat/random/", (req: Request, res: Response) => {
        res.json(getRandomChat(defaultUserCount, defaultMessageCount)); 
    });

     // Returns a random chat of messages from defined counts using randomly generated sentances
    app.get("/chat/random/:userCount/:messageCount", (req: Request, res: Response) => {
        const userCount = req.params.userCount ? parseInt(req.params.userCount) : defaultUserCount;
        const messageCount = req.params.messageCount ? parseInt(req.params.messageCount) : defaultMessageCount;    
        res.json(getRandomChat(userCount, messageCount));
    }); 

}