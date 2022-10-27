import { IAnalytics } from "./IAnalytics";
import {consoleLogger} from "./console-logger";
import {plausible} from "./plausible";


export const AnalyticsLoader = function(ProviderName: string, environment:string) :IAnalytics {
    if (environment==="test")
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