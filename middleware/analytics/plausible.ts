import { IAnalytics } from "./IAnalytics";
import {IAnalyticsInformation} from "./IAnalyticsInformation"
import fetch from 'node-fetch';

/**
 * Configuration object for Analytics classes (read from the environment)
 */
class configuration{
    baseUrl: string;    
    loggingURL: string;      
}

export const plausible= class plausiblelog implements IAnalytics{
    name:string = 'PLAUSIBLE_CONFIGURATION';  
    providerName:string ='PlausibleProvider';
    swaggerRegistration(options: configuration): string {
        let config = <configuration> options;
        let url = new URL(config.baseUrl);
        var jsSrc = config.loggingURL + "/js/plausible.js"
        return `let plausibleCode = document.createElement("script");
        plausibleCode.setAttribute("defer", undefined);
        plausibleCode.setAttribute("data-domain","${url.hostname}");
        plausibleCode.setAttribute("src", ${jsSrc});
        document.body.appendChild(plausibleCode);`
    }
    
    middleware(options: configuration): (req, res, next) => void {
        let id = <configuration> options;
        return (req, res, next) =>{
        try {
            let url = new URL(options.baseUrl + req.url);
            var trakingObject:IAnalyticsInformation = {
                domain:url.hostname,
                url: options.baseUrl + req.url,
                ua: req.header('User-Agent'),
                lang: req.header('Accept-Language'),
                method: req.method,
                cip: getRemoteAddr(req),
                res: res.body,
                res_status: res.status,
                res_length: res.length,
            };
            SendToPlausible(options,trakingObject);
        } catch (error  ) {
            // error logging somewhere?
            console.log(` Error : ${error.message}`)
        }
        // Implement the middleware function based on the options object
        next()
        }
    }
}


function SendToPlausible(options:{baseUrl:string, loggingURL:string}, trakingObject: { url: any;domain:any; ua: any; lang: any; method: any; cip: any; res: any; res_status: any; res_length: any; }) {
    fetch(`${options.loggingURL}/api/event`, {
        method: 'POST',
        headers: {
            'User-Agent': trakingObject.ua,
            'X-Forwarded-For': trakingObject.cip,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'pageview',
            'url': trakingObject.url,
            'domain': trakingObject.domain
        })
    });
}
    

function getRemoteAddr(req) {
    if (req.ip) return req.ip;
    if (req._remoteAddress) return req._remoteAddress;
    var sock = req.socket;
    if (sock.socket) return sock.socket.remoteAddress;
    return sock.remoteAddress;
}
