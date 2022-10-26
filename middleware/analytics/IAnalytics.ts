/**
 * Interface - this is what an Analytics Middleware needs to do.
 */
export interface IAnalytics {
    middleware(options: object): void; // Register middleware function
    swaggerRegistration(options: object): string;
    name: string;
}
