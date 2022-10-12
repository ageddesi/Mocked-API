import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomUsers from '../../users/utils/getRandomUsers';
import { getRandomChat } from '../utils/getRandomChat';

const defaultUserCount = 100;
const defaultMessageCount = 1000;

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * '/chat/random':
     *   get:
     *     tags:
     *       - Chat
     *     summary: Returns a random chat of 100 users and 1000 messages using randomly generated sentances
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockChatResponse'
     */
    app.get('/chat/random/', (req: Request, res: Response) => {
        res.json(getRandomChat(defaultUserCount, defaultMessageCount));
    });

    /**
     * @openapi
     * '/chat/random/{userCount}/{messageCount}':
     *   get:
     *     tags:
     *       - Chat
     *     summary: Returns a random chat of messages from defined counts using randomly generated sentances
     *     parameters:
     *       - in: path
     *         name: userCount
     *         description: The amount of users the messages can be generated from
     *         type: string
     *         default: 100
     *       - in: path
     *         name: messageCount
     *         description: The amount of messages that will be returned
     *         type: string
     *         default: 1000
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockChatResponse'
     */
    app.get('/chat/random/:userCount/:messageCount', (req: Request, res: Response) => {
        const userCount = req.params.userCount ? parseInt(req.params.userCount) : defaultUserCount;
        const messageCount = req.params.messageCount ? parseInt(req.params.messageCount) : defaultMessageCount;
        res.json(getRandomChat(userCount, messageCount));
    });
};
