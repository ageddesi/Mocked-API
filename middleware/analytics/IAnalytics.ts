/**
 * Interface - this is what an Analytics Middleware needs to do.
 */
export interface IAnalytics {
    middleware(options: object): (req, res, next) => void; // Register middleware function
    swaggerRegistration(options: object): string;
    name: string;
}
