/*----------------------shit method-----------------------------*/
/*
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    const __dirname = '../../Day8/I(bonus)/assets/'
    switch(req.url) {
        case '/':
        fs.createReadStream(`../../Day8/I(bonus)/main.html`).pipe(res);
        break;
        case '/assets/H.css':
        fs.createReadStream(`${__dirname}H.css`).pipe(res);
        break;
        case '/assets/images/flower-icon.png':
        fs.createReadStream(`${__dirname}images/flower-icon.png`).pipe(res);
        break;
        case '/assets/images/logo.png':
        fs.createReadStream(`${__dirname}images/logo.png`).pipe(res);
        break;
        case '/assets/images/flowershop.jpg':
        fs.createReadStream(`${__dirname}images/flowershop.jpg`).pipe(res);
        break;
        case '/assets/images/truck-icon.png':
        fs.createReadStream(`${__dirname}images/truck-icon.png`).pipe(res);
        break;
        case '/assets/images/payment-icon.png':
        fs.createReadStream(`${__dirname}images/payment-icon.png`).pipe(res);
        break;
        case '/assets/images/phone-icon.png':
        fs.createReadStream(`${__dirname}images/phone-icon.png`).pipe(res);
        break;
        case '/assets/script/async.js':
        fs.createReadStream(`${__dirname}script/async.js`).pipe(res);
        break;
        case '/assets/script/main.js':
        fs.createReadStream(`${__dirname}script/main.js`).pipe(res);
        break;
        default:
        res.writeHead(404);
        res.end();
    }
}).listen(8080, '127.0.0.1');
*/

/*----------------------better method-----------------------------*/
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.createReadStream(`../../Day8/I(bonus)/main.html`).pipe(res);
    } else if (req.url) {
        fs.createReadStream(path.join('..','..','Day8','I(bonus)',req.url)).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080, '127.0.0.1');