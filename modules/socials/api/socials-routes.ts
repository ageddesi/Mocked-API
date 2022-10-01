import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getRandomTwitterPosts } from '../utils/getRandomTwitterPosts';

const defaultPostsCount = 10;

module.exports = function(app : core.Express){

    // Returns a set of Fake Twitter Posts
    app.get("/socials/twitter", (req: Request, res: Response) => {
        res.json(getRandomTwitterPosts(defaultPostsCount));
    })

}
