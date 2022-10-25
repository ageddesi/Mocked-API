import fetch from 'node-fetch';
import { send } from 'process';
const url = require('url')

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
    



export const plausibleLogger= function (options:{baseUrl:string, loggingURL:string}) {
    return function (req, res, next) {
        try {
            let url = new URL(options.baseUrl + req.url);
            var trakingObject = {
                domain:url.hostname,
                url: options.baseUrl + req.url,
                ua: req.header('User-Agent'),
                lang: req.header('Accept-Language'),
                method:req.method,
                cip: getRemoteAddr(req),
                res: res.body,
                res_status: res.status,
                res_length:res.length,
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


function getRemoteAddr(req) {
    if (req.ip) return req.ip;
    if (req._remoteAddress) return req._remoteAddress;
    var sock = req.socket;
    if (sock.socket) return sock.socket.remoteAddress;
    return sock.remoteAddress;
}
