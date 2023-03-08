import { rateLimit } from 'express-rate-limit';
import { Request, Response } from 'express';
import rateLimitResponse from './consts/RateLimitResponse';

// WINDOW_SIZE and WINDOW_TIME can be configured in .env.example file
const RATELIMIT_WINDOWSIZE = parseInt(process.env.RATELIMIT_WINDOWSIZE);
const RATELIMIT_WINDOWTIME = parseInt(process.env.RATELIMIT_WINDOWTIME);

// middleware for rate limiting application usage.
export const applicationRateLimiter = rateLimit({
    max: RATELIMIT_WINDOWSIZE,
    windowMs: RATELIMIT_WINDOWTIME,
    legacyHeaders: false,
    standardHeaders: true, // sends standard headers after the limit get over
    message: (req: Request, res: Response) => {
        const ratelimitObject: rateLimitResponse = {
            id: 'too_many_requests',
            generatedAt: Date.now(),
            message: 'API Rate limit exceeded.',
        };
        res.json(ratelimitObject).status(429);
    },
});
