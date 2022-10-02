import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getRandomInstagramPosts } from '../utils/getRandomInstagramPosts';
import { getRandomTwitterPosts } from '../utils/getRandomTwitterPosts';

const DEFAULT_POSTS_COUNT = 10;

module.exports = function (app: core.Express) {
  // Returns a set of Fake Twitter Posts
  app.get('/socials/twitter', (req: Request, res: Response) => {
    res.json(getRandomTwitterPosts(DEFAULT_POSTS_COUNT));
  });

  // Returns a set of Fake Instagram Posts
  app.get('/socials/instagram', (req: Request, res: Response) => {
    res.json(getRandomInstagramPosts(DEFAULT_POSTS_COUNT));
  });
};
