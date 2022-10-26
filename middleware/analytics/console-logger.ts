import { IAnalytics } from "./IAnalytics";




/**
 * Configuration object for Analytics classes (read from the environment)
 */
class configuration{
    logEmoji: string;     
}
export const consoleLogger= class conlog implements IAnalytics{
    name:string = 'CONSOLELOG_CONFIGURATION'; // name of configuration variable
    swaggerRegistration(): void {
        console.log("REGISTER WITH SWAGGER")
    }
    middleware(options: configuration): (req, res, next) => void {
        let id = <configuration> options;
        return (req, res, next) =>{
            try {
                
                console.log(`${id.logEmoji} Requesting : ${req.url}`)
            } catch (error) {
                console.log(` Error : ${error.message}`)
            } 
            next()
        }
    }
}
