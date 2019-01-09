const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const setupPassport = require('./passport');
const redisClient = require('./redis');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const port = process.env.PORT || 3030;
const session = require('./init-session')(app,io,redisClient);

const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

setupPassport(app);

app.use('/', router);

https.createServer(options, app).listen(port);
console.log(`server started at ${new Date()}`);