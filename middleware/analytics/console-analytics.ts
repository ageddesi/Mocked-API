export const consoleLogger= function (options) {
    return function (req, res, next) {
        console.log('LOGGED')
            var trakingObject = {
                url: options.baseUrl + req.url,
                ua: req.header('User-Agent'),
                lang: req.header('Accept-Language'),
                method:req.method,
                cip: getRemoteAddr(req),
                res: res.body,
                res_status: res.status,
                res_length:res.length
            };
           //console.log(JSON.stringify(trakingObject));



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



 