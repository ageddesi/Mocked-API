import { IAnalytics } from "./IAnalytics";
import {consoleLogger} from "./console-logger";
import {plausible} from "./plausible";

/**
 * Analytics provider loader
 * @param ProviderName string: Name of the provider to load
 * @param enabled bool : Is analytics enabled?
 * @param environment string: The environment executing against (no analytics provider will be loaded when testing)
 * @returns 
 */
export const AnalyticsLoader = function(ProviderName: string,enabled:boolean, environment:string) :IAnalytics {
    if (environment==="test" || enabled === false)
        return null;
    var providers =[consoleLogger,plausible]
    var result = providers.filter(x=>{
        var provider:IAnalytics = new x();
        return provider.providerName === ProviderName
    })
    if (result.length === 1){
        return new result[0]() as IAnalytics; 
    }
    return null;
} 